'use client';
import { Button, Form, Input, Select } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import Link from 'next/link';

interface IFormValues {
  name: string;
  phone: string;
  email: string;
  course: string;
}

const RegisterForm = () => {
  return (
    <Form<IFormValues> variant="filled" layout="vertical" noValidate>
      <FormItem<IFormValues> name="name" rules={[{ required: true }]}>
        <Input placeholder="Họ và tên" autoComplete="name" aria-label="Họ và tên" />
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
        />
      </FormItem>
      <FormItem<IFormValues> name="email" rules={[{ required: true, type: 'email' }]}>
        <Input placeholder="Email" type="email" autoComplete="email" aria-label="Email" />
      </FormItem>
      <FormItem<IFormValues> name="course" rules={[{ required: true }]}>
        <Select
          options={[
            { label: 'Khoá đại trà online', value: 'Đại trà' },
            { label: 'Khoá VIP 1 kèm 1', value: 'VIP' },
          ]}
          placeholder="Khoá học"
          aria-label="Khoá học"
        />
      </FormItem>
      <div className="flex flex-col-reverse justify-end gap-4 sm:flex-row">
        <Link href="/gioi-thieu" passHref tabIndex={-1}>
          <Button block>Theo dõi Thầy Phúc</Button>
        </Link>
        <Button type="primary" htmlType="submit">
          Nhận tư vấn
        </Button>
      </div>
    </Form>
  );
};

export default RegisterForm;
