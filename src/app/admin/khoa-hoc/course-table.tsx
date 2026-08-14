'use client';

import { Panel } from '@/components/ui';
import { formatDate } from '@/lib/dayjs';
import { fetcher } from '@/lib/fetcher';
import { Course, CourseStatus } from '@/types';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import CourseForm from './course-form';
import { Button, Form, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import useSWR from 'swr';

const CourseTable = () => {
  const { data, isLoading, mutate } = useSWR<Course[]>('/api/v1/courses', fetcher);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selected, setSelected] = useState<Course | undefined>();
  const [form] = Form.useForm<Course>();

  const openCreate = () => {
    setSelected(undefined);
    setDrawerOpen(true);
  };

  const openEdit = (course: Course) => {
    setSelected(course);
    setDrawerOpen(true);
  };

  const handleFinish = () => {
    setDrawerOpen(false);
    mutate();
  };

  const columns: ColumnsType<Course> = [
    { title: 'Thứ tự', dataIndex: 'order', key: 'order', width: 80 },
    { title: 'Tên khóa học', dataIndex: 'name', key: 'name' },
    { title: 'Đối tượng', dataIndex: 'target', key: 'target' },
    { title: 'Lịch học', dataIndex: 'schedule', key: 'schedule' },
    {
      title: 'Ngày khai giảng',
      dataIndex: 'startDate',
      key: 'startDate',
      render: (value: string) => formatDate(value),
    },
    {
      title: 'Sĩ số',
      key: 'students',
      render: (_, record) => `${record.currentStudents}/${record.maxStudents}`,
    },
    {
      title: 'Trạng thái',
      key: 'status',
      render: (_, record) =>
        record.status === CourseStatus.Active ? (
          <Tag color="success">Đang tuyển sinh</Tag>
        ) : (
          <Tag color="default">Đang vận hành</Tag>
        ),
    },
    {
      title: '',
      key: 'actions',
      width: 80,
      render: (_, record) => (
        <Space>
          <Button icon={<EditOutlined />} onClick={() => openEdit(record)} />
          <Button
            variant="outlined"
            color="danger"
            icon={<DeleteOutlined />}
            onClick={() => console.log('Delete', record)}
          />
        </Space>
      ),
    },
  ];

  return (
    <>
      <Space className="mb-4">
        <Button type="primary" onClick={openCreate} icon={<PlusOutlined />}>
          Thêm khóa học
        </Button>
      </Space>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={data}
        loading={isLoading}
        pagination={{ pageSize: 10 }}
      />
      <Panel
        title={selected ? 'Chỉnh sửa khóa học' : 'Thêm khóa học'}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onSave={form.submit}
        destroyOnHidden
      >
        <CourseForm form={form} course={selected} onFinish={handleFinish} />
      </Panel>
    </>
  );
};

export default CourseTable;
