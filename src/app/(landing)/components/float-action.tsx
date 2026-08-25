'use client';

import { Zalo } from '@/components/icon';
import { LINKS } from '@/config/routes';
import Icon from '@ant-design/icons';
import { FloatButton, Tooltip } from 'antd';
import { FaFacebookMessenger } from 'react-icons/fa6';

const FloatAction = () => {
  return (
    <FloatButton.Group>
      <Tooltip title="Lên đầu trang" placement="right">
        <FloatButton.BackTop type="default" />
      </Tooltip>
      <Tooltip title="Nhắn Thầy Phúc qua Messenger" placement="right">
        <FloatButton
          icon={
            <Icon
              component={FaFacebookMessenger}
              className="text-3xl! text-[#2c64f5]!"
              aria-label="Messenger"
            />
          }
          className="animate-wiggle"
          href={LINKS.MESSENGER}
          target="_blank"
          aria-label="Nhắn Thầy Phúc qua Messenger"
        />
      </Tooltip>
      <Tooltip title="Nhắn Thầy Phúc qua Zalo" placement="right">
        <FloatButton
          icon={<Zalo className="text-3xl!" />}
          className="animate-wiggle"
          href={LINKS.ZALO}
          target="_blank"
          aria-label="Nhắn Thầy Phúc qua Zalo"
        />
      </Tooltip>
    </FloatButton.Group>
  );
};

export default FloatAction;
