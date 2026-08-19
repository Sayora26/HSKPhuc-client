import { landingForm } from '@/config/form';
import { landingTheme } from '@/config/theme';
import { App, ConfigProvider } from 'antd';
import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: Readonly<ReactNode> }) => {
  return (
    <ConfigProvider theme={landingTheme} form={landingForm}>
      <App>
        <main className="bg-gradient flex min-h-dvh items-center justify-center px-6 py-12">
          {children}
        </main>
      </App>
    </ConfigProvider>
  );
};

export default AuthLayout;
