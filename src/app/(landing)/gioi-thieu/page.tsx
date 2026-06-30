import { Container } from '@/components/ui';
import TextTicker from '../components/text-ticker';
import HeroSection from './hero';
import TeachingMethod from './teaching-method';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Giới thiệu',
  description: 'Giới thiệu về Afú Chinese - Học tiếng Trung cùng Thầy Phúc',
};

const About = () => {
  return (
    <>
      <TextTicker />
      <div className="bg-[#f5f5f5]">
        <Container Component="section">
          <HeroSection />
        </Container>
      </div>
      <section className="bg-linear-to-t from-[#fff4dd] to-white">
        <Container className="py-8">
          <TeachingMethod />
        </Container>
      </section>
    </>
  );
};

export default About;
