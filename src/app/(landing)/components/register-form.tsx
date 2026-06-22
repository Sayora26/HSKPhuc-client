'use client';
import { Form, Input, Select } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { CSSProperties } from 'react';

interface IFormValues {
  name: string;
  phone: string;
  email: string;
  course: string;
}

interface RegisterFormProps {
  children?: React.ReactNode;
}

const hoverStyle = {
  '--hsk-color-fill-secondary': '#f5f5f5',
} as CSSProperties;

const RegisterForm: React.FC<RegisterFormProps> = ({ children }) => {
  return (
    <Form<IFormValues> variant="filled" layout="vertical" noValidate>
      <FormItem<IFormValues> name="name" rules={[{ required: true }]}>
        <Input
          placeholder="Họ và tên"
          autoComplete="name"
          aria-label="Họ và tên"
          styles={{ root: hoverStyle }}
        />
      </FormItem>
      <FormItem<IFormValues>
        name="phone"
        rules={[
          { required: true },
          {
            pattern: /^0(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
            message: 'Số điện thoại không hợp lệ',
          },
        ]}
      >
        <Input
          placeholder="Số điện thoại"
          type="tel"
          autoComplete="tel"
          aria-label="Số điện thoại"
          styles={{ root: hoverStyle }}
        />
      </FormItem>
      <FormItem<IFormValues> name="email" rules={[{ required: true, type: 'email' }]}>
        <Input
          placeholder="Email"
          type="email"
          autoComplete="email"
          aria-label="Email"
          styles={{ root: hoverStyle }}
        />
      </FormItem>
      <FormItem<IFormValues> name="course" rules={[{ required: true }]}>
        <Select
          options={[
            { label: 'Khoá đại trà online', value: 'Đại trà' },
            { label: 'Khoá VIP 1 kèm 1', value: 'VIP' },
          ]}
          placeholder="Khoá học"
          aria-label="Khoá học"
          styles={{ root: hoverStyle }}
        />
      </FormItem>
      {children}
    </Form>
  );
};

export default RegisterForm;
