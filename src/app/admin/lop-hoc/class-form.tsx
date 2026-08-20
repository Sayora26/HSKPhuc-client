'use client';

import { Class, ClassStatus, Course } from '@/types';
import {
  Col,
  DatePicker,
  Form,
  FormInstance,
  Input,
  InputNumber,
  Row,
  Select,
  SelectProps,
} from 'antd';
import dayjs from 'dayjs';
import { useEffect } from 'react';

interface ClassFormProps {
  form: FormInstance<Class>;
  cls?: Class;
  courses?: Course[];
  onFinish?: () => void;
}

const schedules: SelectProps['options'] = [
  {
    value: '18h - 19h30 | Thứ 2, 4, 6',
    label: '18h - 19h30 | Thứ 2, 4, 6',
  },
  {
    value: '18h - 19h30 | Thứ 3, 5, 7',
    label: '18h - 19h30 | Thứ 3, 5, 7',
  },
  {
    value: '19h30 - 21h | Thứ 2, 4, 6',
    label: '19h30 - 21h | Thứ 2, 4, 6',
  },
  {
    value: '19h30 - 21h | Thứ 3, 5, 7',
    label: '19h30 - 21h | Thứ 3, 5, 7',
  },
];

const ClassForm = ({ form, cls, courses, onFinish }: ClassFormProps) => {
  const handleFinish = async (values: Omit<Class, 'id'>) => {
    await fetch('/api/v1/classes', {
      method: cls ? 'PATCH' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...values,
        id: cls?.id,
        startDate: dayjs(values.startDate).toISOString(),
      }),
    });

    onFinish?.();
  };

  useEffect(() => {
    form.resetFields();
  }, [form]);

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        courseId: cls?.courseId,
        code: cls?.code,
        schedule: cls?.schedule,
        startDate: cls?.startDate ? dayjs(cls.startDate) : undefined,
        maxStudents: cls?.maxStudents,
        currentStudents: cls?.currentStudents,
        status: cls?.status || ClassStatus.Active,
      }}
      onFinish={handleFinish}
    >
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item name="courseId" label="Khóa học" rules={[{ required: true }]}>
            <Select
              options={courses?.map((course) => ({ value: course.id, label: course.name }))}
              placeholder="Chọn khóa học"
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item name="code" label="Mã lớp" rules={[{ required: true }]}>
            <Input placeholder="VD: AFU2604" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item name="schedule" label="Lịch học" rules={[{ required: true }]}>
            <Select options={schedules} placeholder="Chọn lịch học" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item name="startDate" label="Ngày khai giảng" rules={[{ required: true }]}>
            <DatePicker className="w-full" format="DD/MM/YYYY" placeholder="Chọn ngày" />
          </Form.Item>
        </Col>
        <Col span={24} md={12}>
          <Form.Item name="currentStudents" label="Sĩ số hiện tại" rules={[{ required: true }]}>
            <InputNumber className="w-full" min={0} />
          </Form.Item>
        </Col>
        <Col span={24} md={12}>
          <Form.Item name="maxStudents" label="Sĩ số tối đa" rules={[{ required: true }]}>
            <InputNumber className="w-full" min={1} />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item name="status" label="Trạng thái" rules={[{ required: true }]}>
            <Select
              options={[
                {
                  value: ClassStatus.Active,
                  label: 'Đang tuyển sinh',
                },
                {
                  value: ClassStatus.Inactive,
                  label: 'Đang vận hành',
                },
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default ClassForm;
