import { Container } from '@/components/ui';
import TextTicker from '../components/text-ticker';
import { MasonryItemType } from 'antd/es/masonry/MasonryItem';
import Image from 'next/image';
import HeroSection from './hero';

const images: MasonryItemType[] = [
  '/img/cert/cert-1.png',
  '/img/cert/cert-2.png',
  '/img/cert/cert-3.png',
  '/img/cert/cert-4.png',
  '/img/cert/cert-5.png',
  '/img/cert/cert-6.jpg',
  '/img/cert/cert-7.jpg',
  '/img/cert/cert-8.png',
  '/img/cert/cert-9.webp',
  '/img/cert/cert-10.jpg',
  '/img/cert/cert-11.png',
].map((src) => ({
  key: src,
  data: src,
  children: (
    <Image src={src} alt="Certificate" width={200} height={350} className="w-full object-cover" />
  ),
}));

const About = () => {
  return (
    <>
      <TextTicker />
      <Container className="py-6" Component="section">
        <HeroSection />
      </Container>
    </>
  );
};

export default About;
