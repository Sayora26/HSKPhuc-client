'use client';
import { Container } from '@/components/ui';
import { LINKS } from '@/config/routes';
import Icon from '@ant-design/icons';
import { Button, Col, Grid, Row } from 'antd';
import { Footer as AntFooter } from 'antd/es/layout/layout';
import Image from 'next/image';
import Link from 'next/link';
import { CSSProperties } from 'react';
import { FaFacebookF, FaTiktok, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  const { md } = Grid.useBreakpoint();

  return (
    <AntFooter>
      <Container className="py-15 text-white not-md:text-center">
        <Row gutter={[32, 32]} align={md ? 'stretch' : 'middle'}>
          <Col span={24} md={6}>
            <Link href="/" className="flex justify-center">
              <Image
                src="/img/logo-footer.png"
                alt="Tiếng Trung AFú"
                title="Tiếng Trung AFú"
                width={200}
                height={75}
                className="w-48 object-contain"
              />
            </Link>
            <p className="mt-4 text-center">Bắt đầu học thông minh hơn, không chỉ chăm chỉ hơn.</p>
          </Col>
          <Col span={24} md={5}>
            <h5 className="mb-4 text-base font-bold">Về tôi</h5>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/" className="link-footer">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/gioi-thieu" className="link-footer">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="#" className="link-footer">
                  Khoá học
                </Link>
              </li>
              <li>
                <Link href="#" className="link-footer">
                  Đánh giá
                </Link>
              </li>
              <li>
                <Link href="#" className="link-footer">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </Col>
          <Col span={24} md={7}>
            <h5 className="mb-4 text-base font-bold">Chương trình dạy</h5>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="#" className="link-footer">
                  Giáo trình Hán Ngữ (bộ 6 quyền)
                </Link>
              </li>
              <li>
                <Link href="#" className="link-footer">
                  Giáo trình Hán Ngữ Boya (phiên bản 3)
                </Link>
              </li>
              <li>
                <Link href="#" className="link-footer">
                  Giáo trình chuẩn HSK
                </Link>
              </li>
            </ul>
          </Col>
          <Col span={24} md={6}>
            <h5 className="mb-4 text-base font-bold">Theo dõi tôi</h5>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 not-md:justify-center">
                <Link href={LINKS.FACEBOOK} target="_blank" rel="noopener noreferrer">
                  <Button
                    icon={<Icon component={FaFacebookF} />}
                    style={
                      {
                        '--hsk-button-default-bg': 'transparent',
                        '--hsk-button-default-color': '#ffffff',
                      } as CSSProperties
                    }
                    shape="circle"
                    color="default"
                    variant="outlined"
                    size="large"
                    className="transition-transform hover:-translate-y-1.5"
                  />
                </Link>
                <Link href={LINKS.TIKTOK} target="_blank" rel="noopener noreferrer">
                  <Button
                    icon={<Icon component={FaTiktok} />}
                    style={
                      {
                        '--hsk-button-default-bg': 'transparent',
                        '--hsk-button-default-color': '#ffffff',
                      } as CSSProperties
                    }
                    shape="circle"
                    color="default"
                    variant="outlined"
                    size="large"
                    className="transition-transform hover:-translate-y-1.5"
                  />
                </Link>
                <Link href={LINKS.YOUTUBE} target="_blank" rel="noopener noreferrer">
                  <Button
                    icon={<Icon component={FaYoutube} />}
                    style={
                      {
                        '--hsk-button-default-bg': 'transparent',
                        '--hsk-button-default-color': '#ffffff',
                      } as CSSProperties
                    }
                    shape="circle"
                    color="default"
                    variant="outlined"
                    size="large"
                    className="transition-transform hover:-translate-y-1.5"
                  />
                </Link>
              </div>
              <ul className="mt-4 flex flex-col gap-2">
                <li>
                  Hotline:{' '}
                  <Link href="tel:0329408888" className="link-footer">
                    085 3599 365
                  </Link>
                </li>
                <li>
                  Email:{' '}
                  <Link href="mailto:tiengtrungafu@gmail.com" className="link-footer">
                    tiengtrungafu@gmail.com
                  </Link>
                </li>
                <li>
                  Website:{' '}
                  <Link href="/" className="link-footer" target="_blank" rel="noopener noreferrer">
                    afuchinese.com
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="bg-[#0b1a3c] py-4 text-center text-xs text-white">
        <Container>
          Copyright © 2026 <strong>Tiếng Trung AFú</strong>.<br className="md:hidden" /> All rights
          reserved. Designed by{' '}
          <Link
            href="https://github.com/Sayora26"
            target="_blank"
            className="link-footer font-bold"
            rel="noopener noreferrer"
          >
            Sayora
          </Link>
          .
        </Container>
      </div>
    </AntFooter>
  );
};

export default Footer;
