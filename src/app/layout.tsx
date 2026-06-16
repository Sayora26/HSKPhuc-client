import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import './globals.css';
import clsx from 'clsx';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'vietnamese'],
});

export const metadata: Metadata = {
  generator: 'Next.js',
  applicationName: 'Tiếng Trung AFù',
  referrer: 'origin-when-cross-origin',
  creator: 'Sayora',
  publisher: 'Vercel',

  keywords: [
    'Tiếng Trung AFù',
    'Thầy Phúc tiếng Trung',
    'Học tiếng Trung bằng tư duy',
    'Học Hán tự bài bản',
    'Tiếng Trung giao tiếp thực chiến',
    'Khóa học tiếng Trung online',
    'Luyện thi HSK',
  ],

  title: {
    template: 'Tiếng Trung AFù - %s',
    default: 'Tiếng Trung AFù',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={clsx('mdl-js', inter.variable)}>
      <body cz-shortcut-listen="true">
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
