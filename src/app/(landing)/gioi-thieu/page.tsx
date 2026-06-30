import { Container } from '@/components/ui';
import TextTicker from '../components/text-ticker';
import HeroSection from './hero';

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
