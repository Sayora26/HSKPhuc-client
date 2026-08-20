'use client';

import { PATHS } from '@/config/routes';
import { GoogleOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input } from 'antd';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const LoginForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const handleSubmit = async (): Promise<void> => {
    await signIn('google', { callbackUrl: callbackUrl });
  };

  return (
    <div>
      <Form layout="vertical">
        <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
          <Input placeholder="Nhập email" autoComplete="email" />
        </Form.Item>
        <Form.Item label="Mật khẩu" name="password" rules={[{ required: true }]}>
          <Input.Password placeholder="Nhập mật khẩu" autoComplete="current-password" />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Đăng nhập
        </Button>
      </Form>
      <Divider plain>Hoặc</Divider>
      <Button icon={<GoogleOutlined />} onClick={handleSubmit} block>
        Đăng nhập bằng Google
      </Button>
      <p className="mt-4 text-center">
        Bạn chưa có tài khoản?{' '}
        <Link href={PATHS.AUTH.REGISTER} className="underline!">
          Đăng ký ngay
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
