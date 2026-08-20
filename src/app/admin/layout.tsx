import { App, ConfigProvider, Layout } from 'antd';
import Sidebar from './components/layouts/Sidebar';
import { Content } from 'antd/es/layout/layout';
import Header from './components/layouts/Header';
import { adminTheme } from '@/config/theme';
import { Nunito } from 'next/font/google';
import { adminForm } from '@/config/form';
import AuthProvider from '@/components/providers/auth-provider';
import { Metadata } from 'next';

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin', 'vietnamese'],
});

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ConfigProvider theme={adminTheme} form={adminForm}>
      <App className={nunito.variable}>
        <AuthProvider>
          <Layout style={{ minHeight: '100dvh' }}>
            <Sidebar />
            <Layout>
              <Header />
              <Content>{children}</Content>
            </Layout>
          </Layout>
        </AuthProvider>
      </App>
    </ConfigProvider>
  );
};

export default AdminLayout;
