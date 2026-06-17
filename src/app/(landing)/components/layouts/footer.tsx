import { Container } from '@/components/ui';
import { Button, Col, Row } from 'antd';
import { Footer as AntFooter } from 'antd/es/layout/layout';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <AntFooter>
      <Container className="py-15 text-white">
        <Row gutter={[48, 48]}>
          <Col span={24} md={6}>
            <Link href="/" className="flex justify-center">
              <Image
                src="/img/logo-footer.png"
                alt="Tiếng Trung AFú"
                title="Tiếng Trung AFú"
                width={200}
                height={100}
                className="object-cover"
              />
            </Link>
            <p className="mt-4 text-center">Bắt đầu học thông minh hơn, không chỉ chăm chỉ hơn.</p>
          </Col>
          <Col span={24} md={6}>
            <h5 className="mb-4 text-base font-bold">Về tôi</h5>
            <div className="flex flex-col items-start gap-2">
              <Link href="/" className="link-footer">
                Trang chủ
              </Link>
              <Link href="/gioi-thieu" className="link-footer">
                Giới thiệu
              </Link>
              <Link href="#" className="link-footer">
                Khoá học
              </Link>
              <Link href="#" className="link-footer">
                Liên hệ
              </Link>
              <Link href="#" className="link-footer">
                Đánh giá
              </Link>
            </div>
          </Col>
          <Col span={24} md={6}>
            <h5 className="mb-4 text-base font-bold">Chương trình dạy</h5>
            <div className="flex flex-col items-start gap-2">
              <Link href="#" className="link-footer">
                Giáo trình Hán Ngữ (bộ 6 quyền)
              </Link>
              <Link href="#" className="link-footer">
                Giáo trình Hán Ngữ Boya (phiên bản 3)
              </Link>
              <Link href="#" className="link-footer">
                Giáo trình chuẩn HSK
              </Link>
            </div>
          </Col>
          <Col span={24} md={6}>
            <h5 className="mb-4 text-base font-bold">Theo dõi tôi</h5>
            <div className="flex flex-col items-start gap-2">
              <div className="flex gap-4">
                <Button />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </AntFooter>
  );
};

export default Footer;
