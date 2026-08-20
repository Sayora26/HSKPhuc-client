import { Container } from '@/components/ui';
import { Col, Row } from 'antd';
import { Metadata } from 'next';
import Image from 'next/image';
import TextTicker from '../../components/text-ticker';
import CourseModal from './course-modal';

export const metadata: Metadata = {
  title: 'Khóa VIP',
  description:
    'Khóa học tiếng Trung VIP dành cho người không có điều kiện tham gia lớp học theo lịch cố định, muốn học riêng cùng giáo viên.',
};

const VipCourse = () => {
  return (
    <div>
      <TextTicker />
      <Container className="py-8">
        <Row gutter={[24, 24]} align="middle">
          <Col span={24} lg={12}>
            <Image
              src="/img/courses/VIP.png"
              alt="Khóa VIP"
              width={600}
              height={600}
              className="w-full rounded-2xl"
              priority
            />
          </Col>
          <Col span={24} lg={12}>
            <div className="flex flex-col gap-6">
              <CourseModal />
              <div className="rounded-2xl border p-4">
                <h2 className="text-primary mb-2 text-xl font-bold md:text-2xl">
                  Khóa VIP dành cho ai?
                </h2>
                <ul className="list-disc pl-5 text-base">
                  <li>Người không có điều kiện tham gia lớp học theo lịch cố định</li>
                  <li>Học viên muốn học riêng cùng giáo viên</li>
                  <li>Người mới bắt đầu muốn được hướng dẫn sát sao từ những kiến thức đầu tiên</li>
                  <li>Người cần lộ trình học tập linh hoạt theo mục tiêu cá nhân</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-4">
                <h2 className="text-primary mb-2 text-xl font-bold md:text-2xl">
                  Kết quả đầu ra khóa VIP
                </h2>
                <ul className="list-disc pl-5 text-base">
                  <li>Tiếp thu kiến thức theo đúng năng lực và tốc độ học tập của bản thân</li>
                  <li>Được hỗ trợ và chỉnh sửa lỗi chi tiết trong suốt quá trình học</li>
                  <li>Đạt được mục tiêu học tập theo lộ trình cá nhân đã xây dựng</li>
                  <li>Phát triển toàn diện kỹ năng Nghe - Nói - Đọc - Viết</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default VipCourse;
