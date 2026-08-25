'use client';
import { StudyTools, Wayground, WebsiteBrowser } from '@/components/icon';
import { Col, Row } from 'antd';

const Tools = () => {
  return (
    <div>
      <Row gutter={24}>
        <Col span={24} md={16} lg={12}>
          <h2 className="text-primary mb-2 text-3xl font-bold tracking-wide uppercase">
            Công cụ hỗ trợ tự học
          </h2>
          <p className="text-base">
            Việc học online trở nên dễ dàng hơn bao giờ hết khi học viên được cung cấp tài nguyên có
            sẵn để chủ động hơn trong việc học.
          </p>
        </Col>
        <Col span={0} md={8} lg={12}>
          <span className="text-primary">
            <StudyTools className="text-9xl" aria-hidden="true" />
          </span>
        </Col>
      </Row>

      <Row gutter={[24, 24]} className="mt-8">
        <Col span={24} lg={12}>
          <div className="border-primary flex h-full items-center gap-4 rounded-2xl border px-6 py-4">
            <span className="text-primary">
              <WebsiteBrowser className="text-7xl md:text-9xl" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-primary text-xl font-semibold uppercase">Ôn bài qua Website</h3>
              <p className="text-base">
                Học viên chủ động tự học và làm bài tập thông qua giao diện website được biên soạn
                sẵn và cung cấp miễn phí.
              </p>
            </div>
          </div>
        </Col>
        <Col span={24} lg={12}>
          <div className="border-primary flex h-full items-center gap-4 rounded-2xl border px-6 py-4">
            <span className="text-primary">
              <Wayground className="text-7xl md:text-9xl" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-primary text-xl font-semibold uppercase">Học cùng Wayground</h3>
              <p className="text-base">
                Nền tảng hỗ trợ vừa học vừa chơi. Việc học được thực hiện thông qua các trò chơi
                giúp tăng hứng thú và cải thiện tính chủ động trong học tập
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Tools;
