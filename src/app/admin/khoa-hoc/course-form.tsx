'use client';

import { Course, CourseStatus } from '@/types';
import { Col, DatePicker, Form, FormInstance, Input, InputNumber, Row, Select } from 'antd';
import dayjs from 'dayjs';
import { useEffect } from 'react';

interface CourseFormProps {
  form: FormInstance<Course>;
  course?: Course;
  onFinish?: () => void;
}

const CourseForm = ({ form, course, onFinish }: CourseFormProps) => {
  const handleFinish = async (values: Omit<Course, 'id'>) => {
    await fetch('/api/v1/courses', {
      method: course ? 'PATCH' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...values,
        id: course?.id,
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
        order: course?.order,
        name: course?.name,
        target: course?.target,
        schedule: course?.schedule,
        startDate: course?.startDate ? dayjs(course.startDate) : undefined,
        maxStudents: course?.maxStudents,
        currentStudents: course?.currentStudents,
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
          <Form.Item name="schedule" label="Lịch học" rules={[{ required: true }]}>
            <Input placeholder="VD: 18h - 19h30 | Thứ 2, 4, 6" />
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
          <Form.Item name="image" label="Ảnh (đường dẫn)" rules={[{ required: true }]}>
            <Input placeholder="/img/courses/example.png" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item name="status" label="Trạng thái" rules={[{ required: true }]}>
            <Select
              options={[
                {
                  value: CourseStatus.Active,
                  label: 'Đang tuyển sinh',
                },
                {
                  value: CourseStatus.Inactive,
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

export default CourseForm;
