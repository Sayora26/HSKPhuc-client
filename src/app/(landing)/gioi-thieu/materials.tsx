'use client';
import { Curriculum } from '@/components/icon';
import { Col, Row } from 'antd';

const Materials = () => {
  return (
    <>
      <Row gutter={24}>
        <Col span={24} md={16} lg={12}>
          <h2 className="text-primary text-3xl font-bold tracking-wide uppercase">
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
        <Col span={24} md={12}>
          <div className="border-primary flex h-full gap-4 rounded-2xl border px-6 py-4">
            <div>1</div>
            <div>
              <h3 className="text-primary text-xl font-semibold">
                Ghi nhớ hán tự và bộ thủ qua Flashcards
              </h3>
              <p className="text-base">
                Nhận dạng mặt chữ là điều ưu tiên trong giai đoạn đầu. Việc ghi nhớ Hán tự trở nên
                dễ dàng hơn thông qua cách chiết tự kết hợp flashcard được giáo viên soạn sẵn của
                từng bài.
              </p>
            </div>
          </div>
        </Col>
        <Col span={24} md={12}>
          <div className="border-primary flex h-full gap-4 rounded-2xl border px-6 py-4">
            <div>2</div>
            <div>
              <h3 className="text-primary text-xl font-semibold">Luyện phản xạ bằng tiếng Trung</h3>
              <p className="text-base">
                Học viên không học bị động mà được tương tác trực tiếp trong giờ học, từ đó nâng cao
                phản xạ bằng tiếng Trung, không tư duy thông qua tiếng Việt.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Materials;
