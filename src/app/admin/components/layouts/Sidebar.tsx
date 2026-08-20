'use client';

import { PATHS } from '@/config/routes';
import {
  CarryOutOutlined,
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ScheduleOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Flex, Layout, Menu, Tooltip } from 'antd';
import { ItemType, MenuItemType } from 'antd/es/menu/interface';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

const { Sider } = Layout;

const siderMenuItems: ItemType<MenuItemType>[] = [
  {
    key: 'dashboard',
    icon: <DashboardOutlined />,
    label: <Link href={PATHS.ADMIN.DASHBOARD}>Dashboard</Link>,
  },
  {
    key: 'exams',
    icon: <CarryOutOutlined />,
    label: <Link href="/admin/exams">Bài thi</Link>,
  },
  {
    key: 'users',
    icon: <UserOutlined />,
    label: <Link href="/admin/users">Người dùng</Link>,
  },
  {
    key: 'courses',
    icon: <ScheduleOutlined />,
    label: <Link href={PATHS.ADMIN.COURSES}>Khóa học</Link>,
  },
  {
    key: 'classes',
    icon: <TeamOutlined />,
    label: <Link href={PATHS.ADMIN.CLASSES}>Lớp học</Link>,
  },
  {
    key: 'settings',
    icon: <SettingOutlined />,
    label: <Link href={PATHS.ADMIN.SETTINGS}>Cài đặt</Link>,
  },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible collapsed={collapsed} trigger={null}>
      <Flex
        align="center"
        justify={collapsed ? 'center' : 'space-between'}
        className="group h-16 px-2!"
      >
        <span
          className={clsx('text-xl font-bold text-white', {
            'group-hover:hidden': collapsed,
          })}
        >
          {collapsed ? 'A' : 'Admin'}
        </span>
        <div className={clsx({ 'hidden group-hover:block': collapsed })}>
          <Tooltip title={collapsed ? 'Mở thanh bên' : 'Đóng thanh bên'} placement="right">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{ color: '#fff' }}
            />
          </Tooltip>
        </div>
      </Flex>
      <Menu mode="inline" defaultSelectedKeys={['dashboard']} items={siderMenuItems} />
    </Sider>
  );
};

export default Sidebar;
