'use client';

import { Panel } from '@/components/ui';
import { fetcher } from '@/lib/fetcher';
import { Course } from '@/types';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import CourseForm from './course-form';
import { Button, Form, Popconfirm, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import useSWRImmutable from 'swr/immutable';

const CourseTable = () => {
  const { data, isLoading, mutate } = useSWRImmutable<Course[]>('/api/v1/courses', fetcher);
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
    mutate(undefined, { revalidate: true });
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/v1/courses?id=${id}`, { method: 'DELETE' });
    mutate(undefined, { revalidate: true });
  };

  const columns: ColumnsType<Course> = [
    { title: 'Thứ tự', dataIndex: 'order', key: 'order', width: 80 },
    { title: 'Tên khóa học', dataIndex: 'name', key: 'name' },
    { title: 'Đối tượng', dataIndex: 'target', key: 'target' },
    {
      title: '',
      key: 'actions',
      width: 80,
      render: (_, record) => (
        <Space>
          <Button icon={<EditOutlined />} onClick={() => openEdit(record)} />
          <Popconfirm
            title="Xóa khóa học"
            description="Bạn có chắc chắn muốn xóa khóa học này?"
            onConfirm={() => handleDelete(record.id)}
            okText="Xóa"
            cancelText="Hủy"
          >
            <Button variant="outlined" color="danger" icon={<DeleteOutlined />} />
          </Popconfirm>
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
