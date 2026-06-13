'use client';
import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, Flex, Grid, Menu } from 'antd';
import { ItemType, MenuItemType } from 'antd/es/menu/interface';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const menuItems: ItemType<MenuItemType>[] = [
  {
    key: '/',
    label: (
      <Link href="/" className="font-semibold">
        Trang chủ
      </Link>
    ),
  },
  {
    key: '/gioi-thieu',
    label: (
      <Link href="/gioi-thieu" className="font-semibold">
        Giới thiệu
      </Link>
    ),
  },
  {
    key: '/khoa-hoc',
    label: <div className="font-semibold">Khóa học</div>,
    children: [
      {
        label: 'Khóa học 1',
        key: '/khoa-hoc/1',
      },
    ],
  },
  {
    key: '/danh-gia',
    label: (
      <Link href="/danh-gia" className="font-semibold">
        Đánh giá
      </Link>
    ),
  },
];

const Navigation = () => {
  const { md } = Grid.useBreakpoint();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return md ? (
    <Flex align="center" gap="medium">
      <Menu items={menuItems} mode="horizontal" color="primary" selectedKeys={[pathname]} />
      <Button type="primary">Đăng ký học</Button>
    </Flex>
  ) : (
    <>
      <Button icon={<MenuOutlined />} onClick={() => setOpen(true)} />
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title={
          <div className="flex justify-center pr-6">
            <Image src="/img/logo.png" alt="AFú" width={150} height={50} className="h-10 w-auto" />
          </div>
        }
        classNames={{ body: 'p-0!' }}
      >
        <Menu
          items={menuItems}
          mode="inline"
          selectedKeys={[pathname]}
          onClick={() => setOpen(false)}
        />
      </Drawer>
    </>
  );
};

export default Navigation;
