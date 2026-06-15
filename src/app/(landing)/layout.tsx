import { landingTheme } from '@/config/theme';
import { landingForm } from '@/config/form';
import { App, ConfigProvider, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import clsx from 'clsx';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import Header from './components/layouts/header1';
import Footer from './components/layouts/footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'vietnamese'],
});

const MainLayout = ({ children }: { children: Readonly<ReactNode> }) => {
  return (
    <ConfigProvider theme={landingTheme} form={landingForm}>
      <App>
        <Layout className={clsx('min-h-dvh!', inter.variable)}>
          <Header />
          <Content>{children}</Content>
          <Footer />
        </Layout>
      </App>
    </ConfigProvider>
  );
};

export default MainLayout;
