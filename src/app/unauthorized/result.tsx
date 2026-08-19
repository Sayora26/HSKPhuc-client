'use client';

import { PATHS } from '@/config/routes';
import { HomeOutlined, LogoutOutlined } from '@ant-design/icons';
import { Button, Result, Space } from 'antd';
import { signOut } from 'next-auth/react';

const UnauthorizedResult = () => {
  return (
    <Result
      status="403"
      title="Bạn không có quyền truy cập"
      subTitle="Tài khoản của bạn chưa được cấp quyền để xem trang này."
      extra={
        <Space>
          <Button href={PATHS.HOME} icon={<HomeOutlined />}>
            Về trang chủ
          </Button>
          <Button
            variant="solid"
            color="danger"
            icon={<LogoutOutlined />}
            onClick={() => signOut({ callbackUrl: PATHS.HOME })}
          >
            Đăng xuất
          </Button>
        </Space>
      }
    />
  );
};
export default UnauthorizedResult;
