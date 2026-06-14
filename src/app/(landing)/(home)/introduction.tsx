import { Col, Row } from 'antd';
import Image from 'next/image';

const Introduction = () => {
  return (
    <div className="rounded-3xl bg-linear-90 from-[#a9bfff] via-[#f3f9ff] to-[#fffcdd] p-8">
      <Row gutter={[16, 16]} align="middle">
        <Col span={24} md={10}>
          <Image
            src="/img/introduction.png"
            alt="Giới thiệu về Thầy Phúc"
            width={500}
            height={500}
            priority
            fetchPriority="high"
            className="w-full object-cover"
          />
        </Col>
        <Col span={24} md={14}>
          <h2 className="text-primary mb-4 text-center text-2xl font-bold md:text-left lg:text-3xl">
            Giới thiệu
          </h2>
          <ul className="list-disc pl-5 text-justify text-base">
            <li>
              Cử nhân ngành Ngữ Văn Trung Quốc Trường <span className="font-bold">ĐHKHXH&NV</span> -
              ĐHQH TP.HCM
            </li>
            <li>
              <span className="font-bold">3 năm</span> kinh nghiệm phiên dịch xưởng
            </li>
            <li>
              <span className="font-bold">4 năm</span> kinh nghiệm giảng dạy
            </li>
            <li>
              Trình độ: <span className="font-bold">HSK 6</span>
            </li>
            <li className="italic">
              “Đã từng học và sử dụng tiếng Trung trong công việc, thầy hiểu được những khó khăn
              trong quá trình học và ứng dụng tiếng Trung vào cuộc sống, nên thầy luôn chọn phương
              pháp tiếp cận gần gũi và thoải mái nhất để nuôi dưỡng niềm đam mê của học viên với
              tiếng Trung, từ đó nâng cao hiệu quả học tập.”
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};
export default Introduction;
