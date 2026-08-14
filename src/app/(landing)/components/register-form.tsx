'use client';
import { App, Form, Input, Select } from 'antd';
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
  moreInfo?: {
    label: string;
    value: string | number;
  }[];
  onAfterFinish?: () => void;
}

const hoverStyle = {
  '--afu-color-fill-secondary': '#f5f5f5',
} as CSSProperties;

const RegisterForm: React.FC<RegisterFormProps> = ({ children, moreInfo, onAfterFinish }) => {
  const [form] = Form.useForm<IFormValues>();
  const { notification } = App.useApp();

  const handleFinish = async (values: IFormValues) => {
    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, moreInfo }),
      });
      notification.success({
        title: 'Gửi thông tin thành công',
        description:
          'Thầy Phúc sẽ liên hệ với bạn sớm nhất có thể. Cảm ơn bạn đã quan tâm đến khóa học.',
      });
      form.resetFields();
      if (onAfterFinish) {
        onAfterFinish();
      }
    } catch (error) {
      console.log(error);
      notification.error({
        title: 'Gửi thông tin thất bại',
        description: 'Đã xảy ra lỗi, vui lòng thử lại sau.',
      });
    }
  };

  return (
    <Form<IFormValues>
      form={form}
      variant="filled"
      layout="vertical"
      noValidate
      onFinish={handleFinish}
    >
      <FormItem<IFormValues> name="name" rules={[{ required: true }]}>
        <Input
          placeholder="Họ và tên"
          autoComplete="name"
          aria-label="Họ và tên"
          styles={{ root: hoverStyle }}
          size="large"
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
          size="large"
        />
      </FormItem>
      <FormItem<IFormValues> name="email" rules={[{ required: true, type: 'email' }]}>
        <Input
          placeholder="Email"
          type="email"
          autoComplete="email"
          aria-label="Email"
          styles={{ root: hoverStyle }}
          size="large"
        />
      </FormItem>
      <FormItem<IFormValues> name="course" rules={[{ required: true }]}>
        <Select
          options={[
            { label: 'Khoá đại trà online', value: 'Khoá đại trà online' },
            { label: 'Khoá VIP 1 kèm 1', value: 'Khoá VIP 1 kèm 1' },
          ]}
          placeholder="Khoá học"
          aria-label="Khoá học"
          styles={{ root: hoverStyle }}
          size="large"
        />
      </FormItem>
      {children}
    </Form>
  );
};

export default RegisterForm;
