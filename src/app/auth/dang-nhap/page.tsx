import { Card, Spin } from 'antd';
import { Metadata } from 'next';
import LoginForm from './login-form';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Đăng nhập',
};

const Login = () => {
  return (
    <Card className="w-full max-w-md" variant="borderless">
      <div className="mb-8 text-center">
        <h2 className="text-primary mb-2 text-2xl font-bold">Đăng nhập</h2>
        <p>Đăng nhập để vào Tiếng Trung AFú.</p>
      </div>

      <Suspense fallback={<Spin spinning />}>
        <LoginForm />
      </Suspense>
    </Card>
  );
};

export default Login;
