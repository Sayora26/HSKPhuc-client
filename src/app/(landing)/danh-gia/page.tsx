import { Container, StaggerText } from '@/components/ui';
import { Button, Col, Rate, Row } from 'antd';
import Image from 'next/image';
import { ReactNode } from 'react';
import { FaQuoteRight } from 'react-icons/fa6';
import TextTicker from '../components/text-ticker';
import RegisterForm from '../components/register-form';

const Comment = ({ children }: { children: ReactNode }) => {
  return (
    <div className="border-comment rounded-2xl px-8 py-6 inset-shadow-emerald-900">
      <Rate value={5} />
      <div className="mt-2 text-justify text-base">{children}</div>
      <div className="text-right">
        <FaQuoteRight className="text-primary inline text-5xl" />
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <>
      <TextTicker />
      <Container className="py-6">
        <div className="space-y-6">
          <Row gutter={[24, 24]} align="middle">
            <Col span={24} md={9}>
              <Image
                src="/img/tuan-hsk5.png"
                alt="Nghiệp Tuấn - HSK5"
                width={500}
                height={500}
                className="w-full object-cover"
                priority
              />
            </Col>
            <Col span={24} md={15}>
              <Comment>
                <StaggerText text="“Em từng đổi khá nhiều nơi học nhưng ở đây là lần đầu cảm thấy có lộ trình rõ ràng. Em vẫn thích phong cách dạy của thầy nhất, phân tích rất kỹ, nhiều ví dụ thực tế nên nhớ bài lâu hơn. Thầy theo sát tiến độ, sửa lỗi rất chi tiết và luôn nhắc cách tự học. Sau một thời gian em thấy mình tự tin hơn khi dùng tiếng Trung chứ không chỉ làm được đề.”" />
              </Comment>
            </Col>
          </Row>
          <Row gutter={[24, 24]} align="middle">
            <Col span={24} md={9}>
              <Image
                src="/img/nhu-hsk5.png"
                alt="Tố Như - HSK5"
                width={500}
                height={500}
                className="w-full object-cover"
              />
            </Col>
            <Col span={24} md={15} className="md:order-first">
              <Comment>
                <StaggerText text="“Điều em thích nhất là thầy vừa nghiêm túc vừa rất gần gũi, học không bị áp lực. Mỗi buổi học đều có mục tiêu rõ ràng nhưng không tạo cảm giác căng thẳng hay sợ sai. Những chỗ em chưa hiểu đều được giải thích lại rất kỹ, có ví dụ nên dễ nhớ hơn. Em thấy mình không chỉ học được kiến thức mà còn học được cách tự suy nghĩ và tự học hiệu quả hơn.”" />
              </Comment>
            </Col>
          </Row>
          <Row gutter={[24, 24]} align="middle">
            <Col span={24} md={9}>
              <Image
                src="/img/anh-hsk5.png"
                alt="Minh Anh - HSK5"
                width={500}
                height={500}
                className="w-full object-cover"
              />
            </Col>
            <Col span={24} md={15}>
              <Comment>
                <StaggerText text="“Ban đầu em thấy học hơi nhiều tư duy nên khá mệt nhưng học quen thì tiến bộ nhanh hơn. Trước đây em thường học theo kiểu nhớ mẹo và làm theo cảm giác, còn học với thầy phải hiểu bản chất rồi mới áp dụng. Lúc đầu hơi chậm nhưng sau một thời gian em nhận ra mình nhớ lâu hơn, gặp dạng bài mới cũng tự xử lý được chứ không bị phụ thuộc vào đáp án mẫu. Em nghĩ đây là kiểu học cần đầu tư lúc đầu nhưng về lâu dài rất đáng.”" />
              </Comment>
            </Col>
          </Row>
        </div>
        <div className="bg-primary mt-8 rounded-2xl p-6">
          <Row gutter={[24, 24]} align="middle">
            <Col span={24} md={12}>
              <h2 className="mb-6 text-center text-2xl font-bold text-white lg:text-left lg:text-3xl">
                Đăng ký học với thầy Phúc
              </h2>
              <RegisterForm>
                <div className="text-right">
                  <Button variant="solid" color="yellow" size="large" htmlType="submit">
                    Đăng ký
                  </Button>
                </div>
              </RegisterForm>
            </Col>
            <Col span={24} md={12}>
              <Image
                src="/img/register-banner.png"
                alt="Đăng ký tư vấn"
                width={500}
                height={500}
                className="w-full object-cover"
              />
            </Col>
          </Row>
        </div>
        <StaggerText
          text={[
            'Được học sinh yêu thương và tin tưởng ngay từ những ngày đầu đi dạy, khiến mình tin rằng những giá trị mà mình tạo ra đủ để giúp học sinh kiên trì và xây dựng niềm yêu thích đối với tiếng Trung.',
            'Với mình, học một ngôn ngữ không chỉ là ghi nhớ kiến thức hay chinh phục một kỳ thi, mà còn là quá trình hình thành tư duy và tìm thấy niềm vui trong việc học. Vì vậy, mình luôn cố gắng tạo ra những buổi học có sự đồng hành.',
            'Mình tin rằng khi học đúng cách, việc học tiếng Trung sẽ không còn là sự cố gắng ngắn hạn mà có thể trở thành một hành trình đủ lâu để nhìn thấy sự thay đổi của chính mình.',
          ].join('\n')}
          className="mx-auto max-w-154 text-center text-base"
        />
      </Container>
    </>
  );
};

export default Reviews;
