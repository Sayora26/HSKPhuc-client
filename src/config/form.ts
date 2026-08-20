import { FormConfig } from 'antd/es/config-provider/context';
import { merge } from 'lodash';

const baseForm: FormConfig = {
  colon: false,

  validateMessages: {
    required: 'Trường này là bắt buộc',
    types: {
      email: 'Email không hợp lệ',
    },
  },
};
const landingSpecificForm: FormConfig = {};

export const landingForm = merge({}, baseForm, landingSpecificForm);

const adminSpecificForm: FormConfig = {};

export const adminForm = merge({}, baseForm, adminSpecificForm);
