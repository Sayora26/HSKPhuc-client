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
        label: <Link href="#">Khóa đại trà online</Link>,
        key: '/khoa-hoc/1',
        title: 'Khóa đại trà online',
      },
      {
        label: 'Khóa VIP 1 kèm 1',
        key: '/khoa-hoc/2',
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
  {
    key: '/tu-hoc',
    label: (
      <Link href="/tu-hoc" className="font-semibold">
        Tự học
      </Link>
    ),
  },
];

const Navigation = () => {
  const { lg } = Grid.useBreakpoint();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return lg ? (
    <Flex align="center" gap="medium">
      <Menu items={menuItems} mode="horizontal" color="primary" selectedKeys={[pathname]} />
      <Link href="/dang-ky-hoc">
        <Button type="primary">Đăng ký học</Button>
      </Link>
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
        size="100%"
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
