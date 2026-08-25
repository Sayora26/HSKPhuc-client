import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import clsx from 'clsx';
import { SITE_URL } from '@/config/routes';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'vietnamese'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    siteName: 'Tiếng Trung AFú',
    title: 'Tiếng Trung AFú',
    description:
      'Học tiếng Trung bài bản bằng phương pháp tư duy đột phá cùng Thầy Phúc. Tập trung vào Hán tự và giao tiếp thực chiến.',
    url: SITE_URL,
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Tiếng Trung AFú',
    description:
      'Học tiếng Trung bài bản bằng phương pháp tư duy đột phá cùng Thầy Phúc. Tập trung vào Hán tự và giao tiếp thực chiến.',
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
