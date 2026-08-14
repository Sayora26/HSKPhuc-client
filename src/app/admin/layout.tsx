import { App, ConfigProvider, Layout } from 'antd';
import Sidebar from './components/layouts/Sidebar';
import { Content } from 'antd/es/layout/layout';
import Header from './components/layouts/Header';
import { adminTheme } from '@/config/theme';
import { Nunito } from 'next/font/google';
import { adminForm } from '@/config/form';

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin', 'vietnamese'],
});

const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ConfigProvider theme={adminTheme} form={adminForm}>
      <App className={nunito.variable}>
        <Layout style={{ minHeight: '100dvh' }}>
          <Sidebar />
          <Layout>
            <Header />
            <Content>{children}</Content>
          </Layout>
        </Layout>
      </App>
    </ConfigProvider>
  );
};

export default AdminLayout;
