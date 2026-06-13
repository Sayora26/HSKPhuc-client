import { FormConfig } from 'antd/es/config-provider/context';

const baseForm: FormConfig = {
  colon: false,
  validateMessages: {
    required: 'Trường này là bắt buộc',
    types: {
      email: 'Email không hợp lệ',
    },
  },
};

export const landingForm: FormConfig = {
  ...baseForm,
};
