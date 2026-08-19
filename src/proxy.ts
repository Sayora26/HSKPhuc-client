import withAuth from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import { PATHS } from './config/routes';

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAdminRoute = req.nextUrl.pathname.startsWith('/admin');

    // 2. Kiểm tra nếu truy cập Route /admin mà người dùng KHÔNG CÓ quyền 'admin'
    if (isAdminRoute && token?.role !== 'admin') {
      return NextResponse.redirect(new URL(PATHS.UNAUTHORIZED, req.url));
    }
  },
  {
    callbacks: {
      // 2. Yêu cầu bắt buộc phải ĐĂNG NHẬP (Token phải tồn tại)
      authorized: ({ token }) => !!token,
    },
  },
);

// 3. Khai báo các Route cần áp dụng Middleware này
export const config = {
  matcher: ['/admin/:path*'],
};
