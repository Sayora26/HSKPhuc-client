'use client';
import { AwardCheck, GraduationCap, LikeStar } from '@/components/icon';
import { Col, Row } from 'antd';

const Criteria = () => {
  return (
    <div className="border-primary text-primary rounded-2xl border-2 p-6">
      <Row gutter={[16, 24]}>
        <Col span={24} md={8}>
          <div className="flex items-center gap-2">
            <GraduationCap className="text-7xl" />
            <div className="flex flex-col">
              <span className="text-gradient text-4xl font-bold">200+</span>
              <span className="text-lg font-semibold">học viên tự tin giao tiếp</span>
            </div>
          </div>
        </Col>
        <Col span={24} md={8}>
          <div className="flex items-center gap-2">
            <AwardCheck className="text-7xl" />
            <div className="flex flex-col">
              <span className="text-gradient text-4xl font-bold">100+</span>
              <span className="text-lg font-semibold">học viên đạt mục tiêu HSK</span>
            </div>
          </div>
        </Col>
        <Col span={24} md={8}>
          <div className="flex items-center gap-2">
            <LikeStar className="text-7xl" />
            <div className="flex flex-col">
              <span className="text-gradient text-4xl font-bold">99%</span>
              <span className="text-lg font-semibold">học viên hài lòng</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Criteria;
