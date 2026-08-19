import { landingTheme } from '@/config/theme';
import { ConfigProvider } from 'antd';
import UnauthorizedResult from './result';

const UnauthorizedPage = () => {
  return (
    <ConfigProvider theme={landingTheme}>
      <main className="bg-gradient flex min-h-dvh items-center justify-center px-6 py-12">
        <UnauthorizedResult />
      </main>
    </ConfigProvider>
  );
};

export default UnauthorizedPage;
