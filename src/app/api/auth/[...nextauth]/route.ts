import { PATHS } from '@/config/routes';
import { api } from '@/lib/api';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

interface GoogleLoginData {
  accessToken: string;
  user: {
    id: string;
    email: string;
    name: string;
    image: string;
    role: string;
  };
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    // 1. Chạy ngay khi người dùng bấm Đăng nhập bằng Google thành công
    async signIn({ user }) {
      if (!user.email) return false;

      try {
        const { data } = await api.post<GoogleLoginData>('/auth/google', {
          email: user.email,
          name: user.name,
          image: user.image,
        });

        // Mutate user so the jwt callback receives backend data
        user.id = data.user.id;
        user.role = data.user.role;
        user.accessToken = data.accessToken;
        return true;
      } catch {
        return false;
      }
    },

    // 2. Đưa Role & accessToken từ backend vào JWT Token
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.accessToken = user.accessToken;
      }
      return token;
    },

    // 3. Đưa Role từ JWT Token vào Session (truy cập được ở Client & Server)
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
        session.user.id = token.id;
      }
      return session;
    },

    redirect({ url, baseUrl }) {
      if (url.startsWith('/')) return new URL(url, baseUrl).toString();

      // Cho phép chuyển hướng nếu thuộc cùng tên miền
      if (new URL(url).origin === baseUrl) return url;

      return baseUrl;
    },
  },
  pages: {
    signIn: PATHS.AUTH.LOGIN,
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
