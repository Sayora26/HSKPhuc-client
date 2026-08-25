'use client';

import { fetcher } from '@/lib/fetcher';
import { SiteSettings } from '@/types';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Flex, Form, Input, message, Typography } from 'antd';
import useSWRImmutable from 'swr/immutable';

const SettingsForm = () => {
  const { data, isLoading, mutate } = useSWRImmutable<SiteSettings>('/api/v1/settings', fetcher);
  const [form] = Form.useForm<SiteSettings>();
  const [messageApi, contextHolder] = message.useMessage();

  const handleFinish = async (values: SiteSettings) => {
    await fetch('/api/v1/settings', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });

    messageApi.success('Đã lưu cài đặt');
    mutate(undefined, { revalidate: true });
  };

  return (
    <Card title="Chữ chạy (Text Ticker)" loading={isLoading}>
      {contextHolder}
      <Typography.Paragraph type="secondary">
        Danh sách các thông báo hiển thị luân phiên trên chữ chạy đầu trang.
      </Typography.Paragraph>
      <Form
        form={form}
        layout="vertical"
        initialValues={{ tickerTexts: data?.tickerTexts }}
        onFinish={handleFinish}
      >
        <Form.List name="tickerTexts">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Flex key={field.key}>
                  <Form.Item
                    {...field}
                    key={field.key}
                    className="flex-1"
                    rules={[{ required: true, message: 'Vui lòng nhập nội dung' }]}
                  >
                    <Input placeholder="VD: 🎉 Ưu đãi đặc biệt tháng này" />
                  </Form.Item>
                  <Button
                    variant="text"
                    color="danger"
                    icon={<MinusCircleOutlined />}
                    onClick={() => remove(field.name)}
                  />
                </Flex>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Thêm dòng chữ chạy
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Lưu thay đổi
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default SettingsForm;
