import { Container } from '@/components/ui';
import { Button, Col, Row } from 'antd';
import Image from 'next/image';
import RegisterForm from '../(home)/register-form';

const RegisterStudy = () => {
  return (
    <div className="flex-1 bg-linear-90 from-[#a9bfff] via-[#f3f9ff] to-[#fffcdd]">
      <Container className="py-8">
        <div className="overflow-auto rounded-lg bg-white shadow-md">
          <Row align="middle">
            <Col span={24} md={12}>
              <div className="p-6 md:p-8">
                <h1 className="mb-4 text-center text-2xl lg:text-left lg:text-3xl">
                  <strong className="text-primary not-md:mr-1">Đăng ký sớm</strong>
                  <br />
                  để nhận ưu đãi hấp dẫn nha!
                </h1>
                <RegisterForm>
                  <Button type="primary" size="large" htmlType="submit" block>
                    Đăng ký nhận ưu đãi
                  </Button>
                </RegisterForm>
              </div>
            </Col>
            <Col span={24} md={12}>
              <Image
                src="/img/endow.png"
                alt="Đăng ký sớm để nhận ưu đãi hấp dẫn nha!"
                width={700}
                height={700}
                priority
                fetchPriority="high"
                className="h-full object-cover"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default RegisterStudy;
