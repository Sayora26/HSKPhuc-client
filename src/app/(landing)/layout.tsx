import { landingForm } from '@/config/form';
import { landingTheme } from '@/config/theme';
import { App, ConfigProvider, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import clsx from 'clsx';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import FloatAction from './components/float-action';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'vietnamese'],
});

export const metadata: Metadata = {
  description:
    'Học tiếng Trung bài bản bằng phương pháp tư duy đột phá cùng Thầy Phúc. Tập trung vào Hán tự và giao tiếp thực chiến, giúp bạn làm chủ ngôn ngữ tự nhiên, không học vẹt. Đăng ký nhận tư vấn ngay!',
};

const MainLayout = ({ children }: { children: Readonly<ReactNode> }) => {
  return (
    <ConfigProvider theme={landingTheme} form={landingForm}>
      <App>
        <Layout className={clsx('min-h-dvh!', inter.variable)}>
          <Header />
          <Content className="flex flex-col">{children}</Content>
          <Footer />
        </Layout>
        <FloatAction />
      </App>
    </ConfigProvider>
  );
};

export default MainLayout;
