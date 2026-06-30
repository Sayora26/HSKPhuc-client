'use client';

import { Zalo } from '@/components/icon';
import { LINKS } from '@/config/routes';
import Icon from '@ant-design/icons';
import { FloatButton, Tooltip } from 'antd';
import Link from 'next/link';
import { FaFacebookMessenger } from 'react-icons/fa6';

const FloatAction = () => {
  return (
    <FloatButton.Group>
      <Tooltip title="Lên đầu trang" placement="right">
        <FloatButton.BackTop type="default" />
      </Tooltip>
      <Tooltip title="Nhắn Thầy Phúc qua Messenger" placement="right">
        <Link href={LINKS.MESSENGER} target="_blank" rel="noopener noreferrer">
          <FloatButton
            icon={<Icon component={FaFacebookMessenger} className="text-3xl! text-[#2c64f5]!" />}
            className="animate-wiggle"
          />
        </Link>
      </Tooltip>
      <Tooltip title="Nhắn Thầy Phúc qua Zalo" placement="right">
        <Link href={LINKS.ZALO} target="_blank" rel="noopener noreferrer">
          <FloatButton icon={<Zalo className="text-3xl!" />} className="animate-wiggle" />
        </Link>
      </Tooltip>
    </FloatButton.Group>
  );
};

export default FloatAction;
