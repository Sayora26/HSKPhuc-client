'use client';
import { Button, Modal, Radio, RadioGroupProps } from 'antd';
import { useState } from 'react';
import RegisterForm from '../components/register-form';

const options: RadioGroupProps['options'] = [
  {
    label: '0 → HSK 1',
    value: '0 → HSK 1',
  },
  {
    label: 'HSK 1 → HSK 2',
    value: 'HSK 1 → HSK 2',
  },
  {
    label: 'HSK 2 → HSK 3',
    value: 'HSK 2 → HSK 3',
  },
  {
    label: 'HSK 3 → HSK 4',
    value: 'HSK 3 → HSK 4',
  },
  {
    label: 'HSK 4 → HSK 5',
    value: 'HSK 4 → HSK 5',
  },
  {
    label: 'HSK 5 → HSK 6',
    value: 'HSK 5 → HSK 6',
  },
];

const LearningRoadmap = () => {
  const [open, setOpen] = useState(false);
  const [selectedCurrentLevel, setSelectedCurrentLevel] = useState<string>();
  const [selectedTargetLevel, setSelectedTargetLevel] = useState<string>();

  return (
    <>
      <div className="text-center">
        <h2 className="text-primary mb-4 text-2xl font-bold lg:text-3xl">Xây dựng lộ trình học</h2>
        <p className="text-base">
          Học đúng cách quan trọng hơn học thật nhiều. Xây dựng lộ trình cá nhân hoá để tiến bộ
          nhanh và bền vững hơn.
        </p>
      </div>
      <div className="mt-8 flex flex-col items-center gap-6">
        <h3 className="text-xl font-bold lg:text-2xl">Trình độ hiện tại của bạn</h3>
        <Radio.Group
          options={options.slice(0, 5)}
          optionType="button"
          buttonStyle="solid"
          className="inline-flex! flex-wrap justify-center gap-4 *:w-40 *:rounded-xl *:text-center *:font-semibold"
          value={selectedCurrentLevel}
          onChange={(e) => setSelectedCurrentLevel(e.target.value)}
        />
        <h3 className="text-xl font-bold lg:text-2xl">Mục tiêu mong muốn của bạn</h3>
        <Radio.Group
          options={options.slice(1, 6)}
          optionType="button"
          buttonStyle="solid"
          className="inline-flex! flex-wrap justify-center gap-4 *:w-40 *:rounded-xl *:text-center *:font-semibold"
          value={selectedTargetLevel}
          onChange={(e) => setSelectedTargetLevel(e.target.value)}
        />
        <Button
          variant="solid"
          color="yellow"
          size="large"
          className="mt-4"
          onClick={() => setOpen(true)}
        >
          Nhận tư vấn lộ trình
        </Button>
      </div>
      <Modal
        open={open}
        title={<div className="text-center">Xây dựng lộ trình học</div>}
        onCancel={() => setOpen(false)}
        footer={null}
        centered
        destroyOnHidden
      >
        <p className="mx-auto mb-8 text-center">
          Không có một lộ trình chung cho tất cả. Hãy bắt đầu hành trình chinh phục HSK với kế hoạch
          học được xây dựng riêng cho bạn.
        </p>
        <RegisterForm
          moreInfo={[
            { label: 'Trình độ hiện tại', value: selectedCurrentLevel || '' },
            { label: 'Mục tiêu mong muốn', value: selectedTargetLevel || '' },
          ]}
          onAfterFinish={() => setOpen(false)}
        >
          <div className="text-center">
            <Button variant="solid" htmlType="submit" color="yellow" className="mt-4" size="large">
              Nhận tư vấn lộ trình
            </Button>
          </div>
        </RegisterForm>
      </Modal>
    </>
  );
};

export default LearningRoadmap;
