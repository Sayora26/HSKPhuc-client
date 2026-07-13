'use client';
import { Curriculum } from '@/components/icon';
import { Col, Row } from 'antd';
import Image from 'next/image';

const Materials = () => {
  return (
    <>
      <Row gutter={24}>
        <Col span={24} md={16} lg={12}>
          <h2 className="text-primary mb-2 text-3xl font-bold tracking-wide uppercase">
            CHƯƠNG TRÌNH DẠY TỔNG HỢP TỪ NHIỀU GIÁO TRÌNH KHÁC NHAU
          </h2>
          <p className="text-base">
            Tài liệu học tập được tổng hợp từ các giáo trình phổ biến được nhiều trường học và trung
            tâm tin dùng. Ngoài ra, còn được biên soạn lại để phù hợp với chường trình HSK 3.0 mới.
          </p>
        </Col>
        <Col span={0} md={8} lg={12}>
          <span className="text-primary">
            <Curriculum className="text-9xl" />
          </span>
        </Col>
      </Row>

      <Row gutter={[24, 24]} className="mt-8">
        <Col span={24} lg={12}>
          <div className="border-primary flex h-full items-center gap-4 rounded-2xl border px-6 py-4">
            <div className="basis-1/3">
              <Image
                src="/img/materials/curriculum1.png"
                alt="Curriculum 1"
                width={200}
                height={200}
                className="w-full"
              />
            </div>
            <div className="basis-2/3">
              <h3 className="text-primary text-xl font-semibold">Giáo trình Hán Ngữ</h3>
              <p className="text-base">
                Phù hợp để học tiếng Trung giai đoạn đầu. Nhiều chủ đề giao tiếp ứng dụng phổ biến
                trong đời sống. Kết hợp với tài liệu luyện nghe đi kèm. Bộ giáo trình giúp học viên
                nâng cao kỹ năng nghe-nói trong 6 tháng đầu tiên.
              </p>
            </div>
          </div>
        </Col>
        <Col span={24} lg={12}>
          <div className="border-primary flex h-full items-center gap-4 rounded-2xl border px-6 py-4">
            <div className="basis-1/3">
              <Image
                src="/img/materials/curriculum2.png"
                alt="Curriculum 2"
                width={200}
                height={200}
                className="w-full"
              />
            </div>
            <div className="basis-2/3">
              <h3 className="text-primary text-xl font-semibold">Giáo trình chuẩn HSK</h3>
              <p className="text-base">
                Phù hợp để luyện thi và học nâng cao. Kết hợp sách bài tập, bộ giáo trình có nhiều
                từ vựng bám sát yêu cầu từng trình độ, dạng bài tập mô phỏng theo đề thi thật giúp
                học viên làm quen cấu trúc đề.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Materials;
