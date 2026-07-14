'use client';
import {
  BookSearch,
  BrainGear,
  Flashcards,
  UsersSpeech,
  VibrateHeadphone,
} from '@/components/icon';
import { Col, Row } from 'antd';

const TeachingMethod = () => {
  return (
    <div>
      <Row gutter={24}>
        <Col span={24} md={16} lg={12}>
          <h2 className="text-primary mb-2 text-3xl font-bold tracking-wide uppercase">
            Phương pháp dạy phù hợp cho từng trình độ
          </h2>
          <p className="text-base">
            Ở mỗi giai đoạn khác nhau, mục tiêu học viên hướng đến cũng khác nhau. Vì vậy cần áp
            dụng nhiều phương pháp phù hợp cho từng cá nhân, từng mục đích.
          </p>
        </Col>
        <Col span={0} md={8} lg={12}>
          <span className="text-primary">
            <BrainGear className="text-9xl" />
          </span>
        </Col>
      </Row>

      <Row gutter={[24, 24]} className="mt-8">
        <Col span={24} md={12}>
          <div className="border-secondary flex h-full gap-4 rounded-2xl border px-6 py-4">
            <span className="text-secondary">
              <Flashcards className="text-5xl md:text-7xl" />
            </span>
            <div>
              <h3 className="text-secondary text-xl font-semibold">
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
          <div className="border-secondary flex h-full gap-4 rounded-2xl border px-6 py-4">
            <span className="text-secondary">
              <UsersSpeech className="text-5xl md:text-7xl" />
            </span>
            <div>
              <h3 className="text-secondary text-xl font-semibold">
                Luyện phản xạ bằng tiếng Trung
              </h3>
              <p className="text-base">
                Học viên không học bị động mà được tương tác trực tiếp trong giờ học, từ đó nâng cao
                phản xạ bằng tiếng Trung, không tư duy thông qua tiếng Việt.
              </p>
            </div>
          </div>
        </Col>
        <Col span={24} md={12}>
          <div className="border-secondary flex h-full gap-4 rounded-2xl border px-6 py-4">
            <span className="text-secondary">
              <VibrateHeadphone className="text-5xl md:text-7xl" />
            </span>
            <div>
              <h3 className="text-secondary text-xl font-semibold">
                Thường xuyên luyện nghe giọng bản xứ
              </h3>
              <p className="text-base">
                Làm quen từ sớm với giọng chuẩn Bắc Kinh, kết hợp phương pháp shadowing, để cải
                thiện kỹ năng phát âm. Luyện nghe thường xuyên giúp ghi nhớ các mẫu câu tốt hơn và
                tăng khả năng nghe hiểu trong giao tiếp.
              </p>
            </div>
          </div>
        </Col>
        <Col span={24} md={12}>
          <div className="border-secondary flex h-full gap-4 rounded-2xl border px-6 py-4">
            <span className="text-secondary">
              <BookSearch className="text-5xl md:text-7xl" />
            </span>
            <div>
              <h3 className="text-secondary text-xl font-semibold">
                Phân tích ngữ pháp chuyên sâu
              </h3>
              <p className="text-base">
                Ở giai đoạn luyện thi, học viên cần nắm vững các cấu trúc ngữ pháp chuẩn. Giáo viên
                sẽ tổng hợp các điểm ngữ pháp quan trọng, lưu ý các cách diễn đạt câu từ dễ mắc lỗi.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TeachingMethod;
