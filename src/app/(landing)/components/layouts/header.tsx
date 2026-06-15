import { Flex } from 'antd';
import { Header as AntHeader } from 'antd/es/layout/layout';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from './navigation';
import { Container } from '@/components/ui';

const Header = () => {
  return (
    <AntHeader className="sticky top-0 z-50!">
      <Container className="h-full!">
        <Flex justify="space-between" align="center" gap={32} className="h-full!">
          <Link href="/" className="shrink-0">
            <Image src="/img/logo.png" alt="AFú" width={150} height={50} className="h-12 w-full" />
          </Link>
          <Navigation />
        </Flex>
      </Container>
    </AntHeader>
  );
};

export default Header;
