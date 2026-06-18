'use client';

import { Zalo } from '@/components/icon';
import Icon, { PhoneFilled } from '@ant-design/icons';
import { Dropdown, FloatButton, MenuProps } from 'antd';
import Link from 'next/link';
import { FaFacebookMessenger, FaPaperPlane } from 'react-icons/fa6';

const items: MenuProps['items'] = [
  {
    label: (
      <Link href="tel:0853599365">
        <span className="font-bold">Số điện thoại</span>
        <br />
        <span>085 3599 365</span>
      </Link>
    ),
    key: 'phone',
    icon: (
      <div className="flex size-9 items-center justify-center rounded-full bg-[#43b625] p-1 text-white">
        <PhoneFilled className="text-xl!" />
      </div>
    ),
  },
  {
    label: (
      <Link
        href="https://www.facebook.com/messages/e2ee/t/8855160047855547"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="font-bold">Messenger</span>
        <br />
        <span>Phúc Nguyễn</span>
      </Link>
    ),
    key: 'messenger',
    icon: (
      <div className="flex size-9 items-center justify-center rounded-full bg-[#31adff] p-1 text-white">
        <Icon component={FaFacebookMessenger} className="text-xl!" />
      </div>
    ),
  },
  {
    label: (
      <Link href="https://zalo.me/84853599365" target="_blank" rel="noopener noreferrer">
        <span className="font-bold">Zalo</span>
        <br />
        <span>Thầy Phúc</span>
      </Link>
    ),
    key: 'zalo',
    icon: (
      <div className="flex size-9 items-center justify-center rounded-full bg-[#0165f8] p-1 text-white">
        <Zalo className="text-xl!" />
      </div>
    ),
  },
];

const FloatAction = () => {
  return (
    <>
      <FloatButton.BackTop type="default" style={{ insetBlockEnd: 108 }} />
      <Dropdown
        placement="topRight"
        trigger={['click']}
        menu={{ items }}
        arrow
        classNames={{
          root: 'w-64',
        }}
      >
        <FloatButton icon={<Icon component={FaPaperPlane} />} style={{ borderWidth: 3 }} />
      </Dropdown>
    </>
  );
};

export default FloatAction;
