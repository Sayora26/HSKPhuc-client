'use client';

import { LogoutOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Avatar, Dropdown, Flex, Input } from 'antd';

const { Header: AHeader } = Layout;

const userMenuItems = [
  { key: 'profile', icon: <UserOutlined />, label: 'Tài khoản' },
  { key: 'logout', icon: <LogoutOutlined />, label: 'Đăng xuất', danger: true },
];

const Header = () => {
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
          <Avatar icon={<UserOutlined />} style={{ cursor: 'pointer' }} />
        </Dropdown>
      </Flex>
    </AHeader>
  );
};

export default Header;
