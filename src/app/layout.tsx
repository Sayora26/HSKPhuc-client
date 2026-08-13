import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import clsx from 'clsx';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'vietnamese'],
});

export const metadata: Metadata = {
  generator: 'Next.js',
  applicationName: 'Tiếng Trung AFú',
  referrer: 'origin-when-cross-origin',
  creator: 'Sayora',
  publisher: 'Vercel',
  authors: [{ name: 'Sayora', url: 'https://github.com/Sayora26' }],

  keywords: [
    'Tiếng Trung AFú',
    'Thầy Phúc tiếng Trung',
    'Học tiếng Trung bằng tư duy',
    'Học Hán tự bài bản',
    'Tiếng Trung giao tiếp thực chiến',
    'Khóa học tiếng Trung online',
    'Luyện thi HSK',
  ],

  title: {
    template: 'Tiếng Trung AFú - %s',
    default: 'Tiếng Trung AFú',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={clsx('mdl-js', inter.variable)}>
      <body cz-shortcut-listen="true">
        <AntdRegistry>{children}</AntdRegistry>
        <Analytics />
      </body>
    </html>
  );
}
