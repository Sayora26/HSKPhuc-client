import { landingTheme } from '@/config/theme';
import { App, ConfigProvider, Layout } from 'antd';
import { Content, Footer } from 'antd/es/layout/layout';
import clsx from 'clsx';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import Header from './components/layouts/Header';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'vietnamese'],
});

const MainLayout = ({ children }: { children: Readonly<ReactNode> }) => {
  return (
    <ConfigProvider theme={landingTheme}>
      <App>
        <Layout className={clsx('min-h-dvh!', inter.variable)}>
          <Header />
          <Content>{children}</Content>
          <Footer>Footer</Footer>
        </Layout>
      </App>
    </ConfigProvider>
  );
};

export default MainLayout;
