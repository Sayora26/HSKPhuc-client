import { Flex } from 'antd';
import { Header as AntHeader } from 'antd/es/layout/layout';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from './Navigation';

const Header = () => {
  return (
    <AntHeader className="sticky top-0 z-50 px-4! md:px-8! lg:px-12!">
      <Flex justify="space-between" align="center" gap={32} className="h-full!">
        <Link href="/" className="shrink-0">
          <Image src="/img/logo.png" alt="AFú" width={150} height={50} className="h-12 w-full" />
        </Link>
        <Navigation />
      </Flex>
    </AntHeader>
  );
};

export default Header;
