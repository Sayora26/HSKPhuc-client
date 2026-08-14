'use client';
import { Button, Drawer, DrawerProps, Flex, Spin } from 'antd';
import { MouseEventHandler } from 'react';

interface PanelProps extends DrawerProps {
  onSave?: MouseEventHandler<HTMLButtonElement>;
}

const Panel = ({ loading = false, children, onClose, onSave, ...props }: PanelProps) => {
  return (
    <Drawer
      closable={{ placement: 'end' }}
      mask={{ closable: false }}
      keyboard={false}
      size={668}
      onClose={loading ? undefined : onClose}
      footer={
        <Flex justify="end" gap={8}>
          <Button onClick={onClose} loading={loading}>
            Hủy
          </Button>
          <Button type="primary" onClick={onSave} loading={loading}>
            Lưu
          </Button>
        </Flex>
      }
      {...props}
    >
      <Spin spinning={loading}>{children}</Spin>
    </Drawer>
  );
};

export default Panel;
