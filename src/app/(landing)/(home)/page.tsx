import { Container } from '@/components/ui';
import TextTicker from '../components/text-ticker';
import RegisterForm from './register-form';
import { Button, Col, Row } from 'antd';
import Image from 'next/image';
import Introduction from './introduction';
import Criteria from './criteria';
import Philosophy from './philosophy';
import LearningRoadmap from './learning-roadmap';
import Link from 'next/link';
import Reviews from './reviews';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Học ngôn ngữ bằng tư duy',
};

const Home = () => {
  return (
    <div>
      <TextTicker />
      <Container className="py-8" Component="section">
        <Row gutter={[24, 24]} align="middle">
          <Col span={24} md={13} className="md:order-1">
            <Image
              src="/img/register-banner.png"
              alt="Đăng ký sớm để giữ lịch học với Thầy Phúc nhé!"
              width={700}
              height={700}
              priority
              fetchPriority="high"
              className="w-full object-cover"
            />
          </Col>
          <Col span={24} md={11}>
            <h1 className="mb-4 text-2xl lg:text-3xl">
              <strong className="text-primary not-md:mr-1">Đăng ký sớm</strong>
              <br className="not-md:hidden" />
              để giữ lịch học với <strong>Thầy Phúc</strong> nhé!
            </h1>
            <RegisterForm>
              <div className="flex flex-col-reverse justify-end gap-4 sm:flex-row">
                <Link href="/gioi-thieu" passHref tabIndex={-1}>
                  <Button block>Theo dõi Thầy Phúc</Button>
                </Link>
                <Button type="primary" htmlType="submit">
                  Nhận tư vấn
                </Button>
              </div>
            </RegisterForm>
          </Col>
        </Row>
      </Container>

      <Container className="py-8" Component="section">
        <Introduction />
      </Container>

      <Container className="py-8" Component="section">
        <Criteria />
      </Container>

      <Container className="py-8" Component="section">
        <Philosophy />
      </Container>

      <Container className="py-8" Component="section">
        <LearningRoadmap />
      </Container>

      <Container className="py-8" Component="section">
        <Reviews />
      </Container>
    </div>
  );
};

export default Home;
