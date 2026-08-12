'use client';
import { Container } from '@/components/ui';
import { Card, Steps, StepsProps } from 'antd';
import { useState } from 'react';

const items: StepsProps['items'] = [
  {
    title: 'Nhập môn cơ bản',
    subTitle: 'Chặng 1',
    content: '0 → HSK 2',
  },
  {
    title: 'Củng cố nền tảng',
    subTitle: 'Chặng 2',
    content: 'HSK 2 → HSK 3',
  },
  {
    title: 'Ứng dụng nâng cao',
    subTitle: 'Chặng 3',
    content: 'HSK 3 → HSK 4',
  },
  {
    title: 'Làm chủ tiếng Trung',
    subTitle: 'Chặng 4',
    content: 'HSK 4 → HSK 5',
  },
];

const contents = [
  {
    targets: [
      'Người mới bắt đầu từ con số 0',
      'Học sinh, sinh viên hoặc người đi làm muốn học tiếng Trung cơ bản',
      'Người cần giao tiếp thường ngày đơn giản',
      'Người muốn học dễ hiểu, không quá nặng ngữ pháp',
    ],
    time: ['24 buổi', '3 buổi/tuần', 'Hoàn thành trong 2 tháng'],
    objectives: [
      'Làm quen với pinyin để biết đánh máy và phát âm chuẩn ngay từ đầu',
      'Nắm vững ngữ âm, từ vựng, mẫu câu và ngữ pháp cơ bản',
      'Giao tiếp trong các tình huống cơ bản thường ngày',
      'Tăng phản xạ nghe - nói những câu hội thoại đơn giản',
      'Đạt trình độ tương đương HSK1 theo chương trình HSK cũ',
    ],
  },
  {
    targets: [
      'Học viên đã có nền tảng tiếng Trung cơ bản',
      'Người muốn nâng cao phản xạ và khả năng giao tiếp',
      'Người có nhu cầu học tiếng Trung phục vụ học tập hoặc công việc',
      'Học viên định hướng luyện thi HSK',
    ],
    time: ['48 buổi', '3 buổi/tuần', 'Hoàn thành trong khoảng 4 tháng'],
    objectives: [
      'Mở rộng vốn từ vựng và đọc được chữ hán mà không cần nhìn pinyin',
      'Nắm được các cấu trúc ngữ pháp quan trọng',
      'Giao tiếp tự nhiên hơn trong các chủ đề quen thuộc',
      'Hoàn thiện kỹ năng nghe - nói và phản xạ giao tiếp',
      'Luyện diễn đạt câu dài và rõ ràng hơn',
      'Đạt trình độ tương đương HSK3 theo chương trình HSK cũ và tương đương HSK1 của HSK 3.0',
    ],
  },
  {
    targets: [
      'Học viên đã có nền tảng tiếng Trung tương đương HSK3',
      'Người muốn sử dụng tiếng Trung trong học tập và công việc',
      'Người cần nâng cao khả năng phản xạ và diễn đạt',
      'Học viên định hướng giao tiếp và ứng dụng thực tế nâng cao',
    ],
    time: ['48 buổi', '3 buổi/tuần', 'Hoàn thành trong khoảng 4 tháng'],
    objectives: [
      'Mở rộng từ vựng và cấu trúc ngữ pháp nâng cao',
      'Luyện nói và trình bày quan điểm theo nhiều chủ đề thực tế',
      'Tăng khả năng diễn đạt ý kiến logic và mạch lạc',
      'Nắm được cấu trúc đề thi HSK4 và kỹ năng làm bài thi HSK trung cấp',
      'Đạt trình độ HSK 4 của chương trình HSK cũ và tương đương HSK 2 theo chương trình HSK 3.0',
    ],
  },
  {
    targets: [
      'Học viên đã hoàn thành HSK4 hoặc có trình độ tương đương',
      'Người cần sử dụng tiếng Trung trong môi trường học tập, làm việc chuyên nghiệp',
      'Người có định hướng du học, học cao học hoặc làm việc tại doanh nghiệp Trung Quốc',
      'Học viên muốn chinh phục chứng chỉ HSK5 và nâng cao năng lực ngôn ngữ toàn diện',
    ],
    time: [
      'Theo lộ trình chuyên sâu cá nhân hóa',
      'Thời lượng tùy theo trình độ đầu vào và mục tiêu học tập',
    ],
    objectives: [
      'Mở rộng vốn từ vựng học thuật và từ vựng ứng dụng trong công việc',
      'Thành thạo các cấu trúc ngữ pháp nâng cao và cách diễn đạt tự nhiên',
      'Đọc hiểu các bài báo, văn bản và tài liệu có độ khó trung bình – cao',
      'Nâng cao khả năng nghe hiểu hội thoại và bài nói ở tốc độ tự nhiên',
      'Trình bày quan điểm, thảo luận và diễn đạt ý kiến một cách logic, mạch lạc',
      'Luyện kỹ năng viết đoạn văn, bài luận ngắn và các dạng bài thường gặp trong HSK5',
      'Làm quen với cấu trúc đề thi HSK 5 và chiến lược làm bài hiệu quả',
    ],
  },
];

const LearningStep = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="bg-linear-90 from-[#a9bfff] via-[#f3f9ff] to-[#fffcdd]">
      <Container className="py-8">
        <Card variant="borderless">
          <h2 className="text-primary mb-6 text-center text-3xl font-bold">
            Lộ trình học chi tiết
          </h2>
          <Steps
            items={items}
            type="dot"
            responsive
            classNames={{
              itemSection:
                'transition-all duration-250 mx-4 py-4 px-2 rounded-2xl in-[.ant-steps-item-active]:bg-secondary',
              itemWrapper: 'flex-col-reverse!',
              itemTitle: 'font-semibold in-[.ant-steps-item-active]:text-white!',
              itemSubtitle: 'in-[.ant-steps-item-active]:text-white! order-first',
              itemContent: 'in-[.ant-steps-item-active]:text-white!',
              itemRail: 'bottom-1.5! top-auto!',
            }}
            current={step}
            onChange={setStep}
          />
          <div className="mt-4 grid grid-cols-8 gap-6 px-4">
            <div className="col-span-3">
              <div className="h-full rounded-2xl border p-4">
                <h4 className="text-lg font-semibold">Đối tượng học:</h4>
                <ul className="mt-2 list-disc pl-4 text-base">
                  {contents[step].targets.map((target, index) => (
                    <li key={index}>{target}</li>
                  ))}
                </ul>
                <h4 className="mt-4 text-lg font-semibold">Thời gian học:</h4>
                <ul className="mt-2 list-disc pl-4 text-base">
                  {contents[step].time.map((time, index) => (
                    <li key={index}>{time}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-span-5">
              <div className="h-full rounded-2xl border p-4">
                <h4 className="text-lg font-semibold">Mục tiêu khóa học:</h4>
                <ul className="mt-2 list-disc pl-4 text-base">
                  {contents[step].objectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default LearningStep;
