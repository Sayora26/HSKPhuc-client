'use client';

import { formatDate } from '@/lib/dayjs';
import { fetcher } from '@/lib/fetcher';
import { User, UserRole } from '@/types';
import { DeleteOutlined } from '@ant-design/icons';
import { Avatar, Button, Popconfirm, Select, Space, Table, Tag, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import useSWRImmutable from 'swr/immutable';

const UserTable = () => {
  const { data, isLoading, mutate } = useSWRImmutable<User[]>('/api/v1/users', fetcher);
  const [messageApi, contextHolder] = message.useMessage();

  const updateRole = async (id: string, role: UserRole) => {
    const response = await fetch('/api/v1/users', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, role }),
    });

    if (!response.ok) {
      messageApi.error('Không thể cập nhật vai trò');
      return;
    }

    messageApi.success('Đã cập nhật vai trò');
    mutate(undefined, { revalidate: true });
  };

  const deleteUser = async (id: string) => {
    const response = await fetch(`/api/v1/users?id=${id}`, { method: 'DELETE' });

    if (!response.ok) {
      messageApi.error('Không thể xóa người dùng');
      return;
    }

    messageApi.success('Đã xóa người dùng');
    mutate(undefined, { revalidate: true });
  };

  const columns: ColumnsType<User> = [
    {
      title: 'Người dùng',
      key: 'user',
      render: (_, record) => (
        <Space>
          <Avatar src={record.image} alt={record.name ?? record.email} size="large" />
          <div>
            <div className="font-semibold">{record.name}</div>
            <div className="text-gray-500">{record.email}</div>
          </div>
        </Space>
      ),
    },
    {
      title: 'Vai trò',
      dataIndex: 'role',
      key: 'role',
      render: (role: UserRole, record) => (
        <Select<UserRole>
          value={role}
          options={[
            { value: 'user', label: 'Người dùng' },
            { value: 'admin', label: 'Quản trị viên' },
          ]}
          onChange={(value) => updateRole(record.id, value)}
        />
      ),
    },
    {
      title: 'Ngày tham gia',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (value: Date | undefined) => (value ? formatDate(value) : '—'),
    },
    {
      title: 'Trạng thái',
      key: 'status',
      render: () => <Tag color="success">Đang hoạt động</Tag>,
    },
    {
      title: '',
      key: 'actions',
      width: 80,
      render: (_, record) => (
        <Popconfirm
          title="Xóa người dùng"
          description="Bạn có chắc chắn muốn xóa người dùng này?"
          onConfirm={() => deleteUser(record.id)}
          okText="Xóa"
          cancelText="Hủy"
        >
          <Button variant="outlined" color="danger" icon={<DeleteOutlined />} />
        </Popconfirm>
      ),
    },
  ];

  return (
    <>
      {contextHolder}
      <Table
        rowKey="id"
        columns={columns}
        dataSource={data}
        loading={isLoading}
        pagination={{ pageSize: 10 }}
      />
    </>
  );
};

export default UserTable;
