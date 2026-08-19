import { PATHS } from '@/config/routes';
import { landingTheme } from '@/config/theme';
import { Button, ConfigProvider, Result, Space } from 'antd';

const NotFound = () => {
  return (
    <ConfigProvider theme={landingTheme}>
      <main className="bg-gradient flex min-h-dvh items-center justify-center px-6 py-12">
        <Result
          status="404"
          title="Trang không tồn tại"
          subTitle="Trang bạn đang tìm kiếm không tồn tại."
          extra={
            <Space>
              <Button href={PATHS.HOME}>Về trang chủ</Button>
            </Space>
          }
        />
      </main>
    </ConfigProvider>
  );
};

export default NotFound;
