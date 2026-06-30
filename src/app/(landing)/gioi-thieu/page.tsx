import { Container } from '@/components/ui';
import TextTicker from '../components/text-ticker';
import HeroSection from './hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Giới thiệu',
  description: 'Giới thiệu về Afú Chinese - Học tiếng Trung cùng Thầy Phúc',
};

const About = () => {
  return (
    <>
      <TextTicker />
      <Container className="py-8" Component="section">
        <HeroSection />
      </Container>
    </>
  );
};

export default About;
