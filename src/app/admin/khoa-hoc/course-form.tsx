'use client';

import { Course } from '@/types';
import { Col, Form, FormInstance, Input, InputNumber, Row, Select, SelectProps, Space } from 'antd';
import Image from 'next/image';
import { useEffect } from 'react';

interface CourseFormProps {
  form: FormInstance<Course>;
  course?: Course;
  onFinish?: () => void;
}

const images: SelectProps['options'] = [
  {
    value: '/img/courses/introductory.png',
    label: 'Vỡ lòng',
  },
  {
    value: '/img/courses/hsk3.png',
    label: 'HSK 3',
  },
  {
    value: '/img/courses/hsk4.png',
    label: 'HSK 4',
  },
  {
    value: '/img/courses/hsk5.png',
    label: 'HSK 5',
  },
];

const CourseForm = ({ form, course, onFinish }: CourseFormProps) => {
  const handleFinish = async (values: Omit<Course, 'id'>) => {
    await fetch('/api/v1/courses', {
      method: course ? 'PATCH' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...values,
        id: course?.id,
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
        order: course?.order,
        name: course?.name,
        target: course?.target,
        image: course?.image,
      }}
      onFinish={handleFinish}
    >
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item name="order" label="Thứ tự" rules={[{ required: true }]}>
            <InputNumber type="number" className="w-full" min={1} />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item name="name" label="Tên khóa học" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item name="target" label="Đối tượng" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item name="image" label="Ảnh" rules={[{ required: true }]}>
            <Select
              options={images}
              optionRender={(option) => (
                <Space>
                  <Image
                    src={String(option.data.value)}
                    alt={String(option.data.label)}
                    width={24}
                    height={24}
                    className="h-6 w-6 rounded object-cover"
                  />
                  {option.data.label}
                </Space>
              )}
              labelRender={(props) => (
                <Space>
                  <Image
                    src={String(props.value)}
                    alt={String(props.label)}
                    width={20}
                    height={20}
                    className="h-5 w-5 rounded object-cover"
                  />
                  {props.label}
                </Space>
              )}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default CourseForm;
