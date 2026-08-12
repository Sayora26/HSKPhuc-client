'use client';
import { PATHS } from '@/config/routes';
import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, Flex, Grid, Menu } from 'antd';
import { ItemType, MenuItemType } from 'antd/es/menu/interface';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const menuItems: ItemType<MenuItemType>[] = [
  {
    key: PATHS.HOME,
    label: (
      <Link href={PATHS.HOME} className="font-semibold">
        Trang chủ
      </Link>
    ),
  },
  {
    key: PATHS.INTRODUCTION,
    label: (
      <Link href={PATHS.INTRODUCTION} className="font-semibold">
        Giới thiệu
      </Link>
    ),
  },
  {
    key: '/khoa-hoc',
    label: <div className="font-semibold">Khóa học</div>,
    children: [
      {
        label: <Link href={PATHS.COURSES.MASS_COURSE}>Khóa đại trà online</Link>,
        key: PATHS.COURSES.MASS_COURSE,
        title: 'Khóa đại trà online',
      },
      {
        label: <Link href={PATHS.COURSES.VIP_COURSE}>Khóa VIP 1 kèm 1</Link>,
        key: PATHS.COURSES.VIP_COURSE,
      },
    ],
  },
  {
    key: PATHS.REVIEWS,
    label: (
      <Link href={PATHS.REVIEWS} className="font-semibold">
        Đánh giá
      </Link>
    ),
  },
  // {
  //   key: '/tu-hoc',
  //   label: (
  //     <Link href="/tu-hoc" className="font-semibold">
  //       Tự học
  //     </Link>
  //   ),
  // },
];

const Navigation = () => {
  const { lg } = Grid.useBreakpoint();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return lg ? (
    <Flex align="center" gap="medium">
      <Menu
        items={menuItems}
        mode="horizontal"
        color="primary"
        selectedKeys={[pathname]}
        className="w-120 justify-end"
      />
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
        size="480"
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
