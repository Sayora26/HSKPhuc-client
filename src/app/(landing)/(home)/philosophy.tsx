import { Col, Row } from 'antd';
import Image from 'next/image';

const Philosophy = () => {
  return (
    <>
      <h2 className="sr-only">Triết lý đào tạo tiếng Trung của Thầy Phúc</h2>
      <Row gutter={[32, 32]}>
        <Col span={24} md={12} lg={9}>
          <div className="relative lg:-mr-24">
            <Image
              src="/img/bubble.png"
              alt="Không dạy tiếng trung giao tiếp nếu bạn không học hán tự"
              width={400}
              height={300}
              className="w-full object-cover"
            />
            <h3 className="xs:text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full rotate-2 text-center text-base font-bold whitespace-nowrap text-white uppercase md:text-base lg:text-xl xl:text-2xl">
              Không dạy tiếng trung giao tiếp
            </h3>
            <p className="xs:text-sm absolute bottom-0 left-0 text-xs font-semibold text-[#ae8845] uppercase md:text-xs lg:text-base xl:text-lg">
              Nếu bạn không học hán tự
            </p>
          </div>
          <p className="mt-8 text-justify text-base leading-relaxed">
            Giao tiếp không chỉ ở lời nói mà còn là trao đổi qua văn bản, tin nhắn. Muốn làm được
            điều đó, bạn phải nắm được cách đọc và đánh máy chữ viết tiếng Trung. Phớt lờ việc học
            Hán tự sẽ khiến cho chặng đường học tiếng Trung của bạn ngày càng khó khăn hơn.
          </p>
        </Col>
        <Col span={24} lg={6} className="not-lg:order-last">
          <div className="mt-8">
            <Image
              src="/img/philosophy.png"
              alt="Triết lý đào tạo tiếng Trung của Thầy Phúc"
              width={400}
              height={200}
              className="w-full object-cover"
            />
          </div>
        </Col>
        <Col span={24} md={12} lg={9}>
          <div className="relative lg:-ml-24">
            <Image
              src="/img/bubble.png"
              alt="Không dạy tiếng trung giao tiếp nếu bạn không học hán tự"
              width={400}
              height={140}
              className="w-full -scale-x-100 object-cover"
            />
            <h3 className="xs:text-lg absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-full -rotate-2 text-center text-base font-bold whitespace-nowrap text-white uppercase md:text-base lg:text-xl xl:text-2xl">
              Không luyện thi HSK
            </h3>
            <p className="xs:text-sm absolute right-0 bottom-0 text-xs font-semibold text-[#ae8845] uppercase md:text-xs lg:text-base xl:text-lg">
              Nếu bạn không giao tiếp tốt
            </p>
          </div>
          <p className="mt-8 text-justify text-base leading-relaxed">
            Khi bạn đang hướng đến tấm bằng HSK, có nghĩa là bạn đã hoàn thành kỹ năng nghe nói cơ
            bản, để tiến đến việc phát triển ngôn ngữ ở dạng viết. Nên nếu bạn chỉ tập trung vào
            việc thi lấy bằng mà bỏ qua kỹ năng giao tiếp, thì tấm bằng trên tay bạn cũng không còn
            nhiều giá trị.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default Philosophy;
