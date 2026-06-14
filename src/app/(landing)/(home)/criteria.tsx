'use client';
import { LikeFilled } from '@ant-design/icons';
import { Col, Row } from 'antd';

const Criteria = () => {
  return (
    <div className="border-primary text-primary rounded-2xl border-2 p-6">
      <Row gutter={[16, 24]}>
        <Col span={24} md={8}>
          <div className="flex items-center gap-2">
            <LikeFilled className="text-6xl" />
            <div className="flex flex-col">
              <span className="text-gradient text-4xl font-bold">200+</span>
              <span className="text-xl font-semibold">học viên tự tin giao tiếp</span>
            </div>
          </div>
        </Col>
        <Col span={24} md={8}>
          <div className="flex items-center gap-2">
            <LikeFilled className="text-6xl" />
            <div className="flex flex-col">
              <span className="text-gradient text-4xl font-bold">100+</span>
              <span className="text-xl font-semibold">học viên đạt mục tiêu HSK</span>
            </div>
          </div>
        </Col>
        <Col span={24} md={8}>
          <div className="flex items-center gap-2">
            <LikeFilled className="text-6xl" />
            <div className="flex flex-col">
              <span className="text-gradient text-4xl font-bold">99%</span>
              <span className="text-xl font-semibold">học viên hài lòng</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Criteria;
