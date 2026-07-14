import { Col, Row } from 'antd';
import Image from 'next/image';

const Accomplishments = () => {
  return (
    <Row gutter={[32, 32]} justify="center" align="middle">
      <Col span={24} sm={8}>
        <Image
          src="/img/accomplishments/bangtotnghiep.png"
          alt="Bằng tốt nghiệp loại giỏi"
          title="Bằng tốt nghiệp loại giỏi"
          width={400}
          height={400}
          className="w-full object-cover px-6"
          priority
        />
      </Col>
      <Col span={24} sm={8}>
        <Image
          src="/img/accomplishments/chungchihsk6.png"
          alt="Chứng chỉ HSK 6"
          title="Chứng chỉ HSK 6"
          width={400}
          height={400}
          className="w-full object-cover px-6"
          priority
        />
      </Col>
      <Col span={24} sm={8}>
        <Image
          src="/img/accomplishments/chungchinvsp.png"
          alt="Chứng chỉ nghiệp vụ sư phạm"
          title="Chứng chỉ nghiệp vụ sư phạm"
          width={400}
          height={400}
          className="w-full object-cover px-6"
          priority
        />
      </Col>
    </Row>
  );
};

export default Accomplishments;
