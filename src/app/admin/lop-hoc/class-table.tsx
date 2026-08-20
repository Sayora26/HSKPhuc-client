'use client';

import { Panel } from '@/components/ui';
import { formatDate } from '@/lib/dayjs';
import { fetcher } from '@/lib/fetcher';
import { Class, ClassStatus, Course } from '@/types';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import ClassForm from './class-form';
import { Button, Form, Popconfirm, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import useSWRImmutable from 'swr/immutable';

const ClassTable = () => {
  const { data, isLoading, mutate } = useSWRImmutable<Class[]>('/api/v1/classes', fetcher);
  const { data: courses } = useSWRImmutable<Course[]>('/api/v1/courses', fetcher);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selected, setSelected] = useState<Class | undefined>();
  const [form] = Form.useForm<Class>();

  const getCourseName = (courseId: string) =>
    courses?.find((course) => course.id === courseId)?.name ?? '—';

  const openCreate = () => {
    setSelected(undefined);
    setDrawerOpen(true);
  };

  const openEdit = (cls: Class) => {
    setSelected(cls);
    setDrawerOpen(true);
  };

  const handleFinish = () => {
    setDrawerOpen(false);
    mutate(undefined, { revalidate: true });
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/v1/classes?id=${id}`, { method: 'DELETE' });
    mutate(undefined, { revalidate: true });
  };

  const columns: ColumnsType<Class> = [
    { title: 'Mã lớp', dataIndex: 'code', key: 'code' },
    {
      title: 'Khóa học',
      key: 'courseId',
      render: (_, record) => getCourseName(record.courseId),
    },
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
        record.status === ClassStatus.Active ? (
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
          <Popconfirm
            title="Xóa lớp học"
            description="Bạn có chắc chắn muốn xóa lớp học này?"
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
          Thêm lớp học
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
        title={selected ? 'Chỉnh sửa lớp học' : 'Thêm lớp học'}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onSave={form.submit}
        destroyOnHidden
      >
        <ClassForm form={form} cls={selected} courses={courses} onFinish={handleFinish} />
      </Panel>
    </>
  );
};

export default ClassTable;
