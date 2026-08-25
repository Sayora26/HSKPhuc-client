import { Container } from '@/components/ui';
import TextTicker from '../components/text-ticker';
import HeroSection from './hero';
import TeachingMethod from './teaching-method';
import { Metadata } from 'next';
import Accomplishments from './accomplishments';
import Materials from './materials';
import Tools from './tools';
import { PATHS } from '@/config/routes';

export const metadata: Metadata = {
  title: 'Giới thiệu',
  description: 'Giới thiệu về Afú Chinese - Học tiếng Trung cùng Thầy Phúc',
  alternates: {
    canonical: PATHS.INTRODUCTION,
  },
  openGraph: {
    title: 'Giới thiệu',
    description: 'Giới thiệu về Afú Chinese - Học tiếng Trung cùng Thầy Phúc',
    url: PATHS.INTRODUCTION,
  },
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
      <Container className="py-8" Component="section">
        <Accomplishments />
      </Container>
      <section className="bg-linear-to-t from-[#fff4dd] to-white">
        <Container className="py-8">
          <TeachingMethod />
        </Container>
      </section>
      <Container className="py-8" Component="section">
        <Materials />
      </Container>
      <Container className="py-8" Component="section">
        <Tools />
      </Container>
    </>
  );
};

export default About;
