import { App, ConfigProvider, Layout } from 'antd';
import Sidebar from './components/layouts/Sidebar';
import { Content } from 'antd/es/layout/layout';
import Header from './components/layouts/Header';
import theme from '@/config/theme';

const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ConfigProvider theme={theme}>
      <App>
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
