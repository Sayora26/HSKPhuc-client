'use client';
import { Button, Radio, RadioGroupProps } from 'antd';

const options: RadioGroupProps['options'] = [
  {
    label: '0 → HSK 1',
    value: '0-1',
  },
  {
    label: 'HSK 1 → HSK 2',
    value: '1-2',
  },
  {
    label: 'HSK 2 → HSK 3',
    value: '2-3',
  },
  {
    label: 'HSK 3 → HSK 4',
    value: '3-4',
  },
  {
    label: 'HSK 4 → HSK 5',
    value: '4-5',
  },
  {
    label: 'HSK 5 → HSK 6',
    value: '5-6',
  },
];

const LearningRoadmap = () => {
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
        />
        <h3 className="text-xl font-bold lg:text-2xl">Mục tiêu mong muốn của bạn</h3>
        <Radio.Group
          options={options.slice(1, 6)}
          optionType="button"
          buttonStyle="solid"
          className="inline-flex! flex-wrap justify-center gap-4 *:w-40 *:rounded-xl *:text-center *:font-semibold"
        />
        <Button variant="solid" color="yellow" size="large" className="mt-4">
          Nhận tư vấn lộ trình
        </Button>
      </div>
    </>
  );
};

export default LearningRoadmap;
