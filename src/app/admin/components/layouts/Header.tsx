'use client';

import { PATHS } from '@/config/routes';
import { LogoutOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Avatar, Dropdown, Flex, Input } from 'antd';
import { signOut, useSession } from 'next-auth/react';

const { Header: AHeader } = Layout;

const userMenuItems = [
  { key: 'profile', icon: <UserOutlined />, label: 'Tài khoản' },
  {
    key: 'logout',
    icon: <LogoutOutlined />,
    label: 'Đăng xuất',
    danger: true,
    onClick: () => signOut({ callbackUrl: PATHS.HOME }),
  },
];

const Header = () => {
  const { data: session } = useSession();

  return (
    <AHeader>
      <Flex justify="space-between" align="center" gap="medium" className="h-full">
        <Input
          prefix={<SearchOutlined />}
          className="max-w-md"
          placeholder="Tìm kiếm..."
          variant="filled"
        />
        <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
          <Avatar
            icon={<UserOutlined />}
            style={{ cursor: 'pointer' }}
            src={session?.user.image}
            alt={session?.user.name || 'Avatar'}
          />
        </Dropdown>
      </Flex>
    </AHeader>
  );
};

export default Header;
