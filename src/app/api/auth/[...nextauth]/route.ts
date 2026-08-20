import { PATHS } from '@/config/routes';
import { adminDb } from '@/lib/firebase-admin'; // Firestore Admin SDK
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// Danh sách email mặc định làm Admin (Optionally)
const ADMIN_EMAILS = [process.env.TEACHER_EMAIL];

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

      const userRef = adminDb.collection('users').doc(user.id);
      const userSnap = await userRef.get();

      if (!userSnap.exists) {
        const initialRole = ADMIN_EMAILS.includes(user.email) ? 'admin' : 'user';

        await userRef.set({
          email: user.email,
          name: user.name,
          image: user.image,
          role: initialRole,
          createdAt: new Date(),
        });
      }

      return true;
    },

    // 2. Đưa Role từ Database vào JWT Token
    async jwt({ token, user }) {
      if (user) {
        const userSnap = await adminDb.collection('users').doc(user.id).get();
        if (userSnap.exists) {
          token.role = userSnap.data()?.role || 'user';
          token.uid = user.id;
        }
      }
      return token;
    },

    // 3. Đưa Role từ JWT Token vào Session (truy cập được ở Client & Server)
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
        session.user.id = token.uid as string;
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
