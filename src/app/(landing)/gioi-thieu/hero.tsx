'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const certificateCol1 = [
  '/img/certifications/cert-1.png',
  '/img/certifications/cert-2.png',
  '/img/certifications/cert-3.png',
  '/img/certifications/cert-4.png',
];

const certificateCol2 = [
  '/img/certifications/cert-5.png',
  '/img/certifications/cert-6.jpg',
  '/img/certifications/cert-7.jpg',
  '/img/certifications/cert-8.png',
];

const certificateCol3 = [
  '/img/certifications/cert-9.webp',
  '/img/certifications/cert-10.jpg',
  '/img/certifications/cert-11.png',
  '/img/certifications/cert-1.png',
];

const HeroSection = () => {
  return (
    <div className="relative h-150 w-full overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-3 gap-4 py-8 after:absolute after:inset-0 after:bg-linear-to-b after:from-[#f5f5f5] after:to-transparent sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        <div className="relative h-full overflow-hidden">
          <motion.div
            animate={{ y: ['0%', '-50%'] }}
            transition={{ ease: 'linear', duration: 25, repeat: Infinity }}
            className="flex flex-col gap-6"
          >
            {[...certificateCol1, ...certificateCol1].map((src, index) => (
              <Image
                key={index}
                src={src}
                alt="Certificate"
                width={200}
                height={300}
                className="w-full object-cover opacity-60"
              />
            ))}
          </motion.div>
        </div>
        <div className="relative h-full overflow-hidden">
          <motion.div
            animate={{ y: ['-50%', '0%'] }}
            transition={{ ease: 'linear', duration: 25, repeat: Infinity }}
            className="flex flex-col gap-6"
          >
            {[...certificateCol2, ...certificateCol2].map((src, index) => (
              <Image
                key={index}
                src={src}
                alt="Certificate"
                width={200}
                height={300}
                className="w-full object-cover opacity-60"
              />
            ))}
          </motion.div>
        </div>
        <div className="relative h-full overflow-hidden">
          <motion.div
            animate={{ y: ['0%', '-50%'] }}
            transition={{ ease: 'linear', duration: 25, repeat: Infinity }}
            className="flex flex-col gap-6"
          >
            {[...certificateCol3, ...certificateCol3].map((src, index) => (
              <Image
                key={index}
                src={src}
                alt="Certificate"
                width={200}
                height={300}
                className="w-full object-cover opacity-60"
              />
            ))}
          </motion.div>
        </div>
        <div className="relative h-full overflow-hidden not-sm:hidden">
          <motion.div
            animate={{ y: ['-50%', '0%'] }}
            transition={{ ease: 'linear', duration: 25, repeat: Infinity }}
            className="flex flex-col gap-6"
          >
            {[...certificateCol1, ...certificateCol1].map((src, index) => (
              <Image
                key={index}
                src={src}
                alt="Certificate"
                width={200}
                height={300}
                className="w-full object-cover opacity-60"
              />
            ))}
          </motion.div>
        </div>
        <div className="relative h-full overflow-hidden not-md:hidden">
          <motion.div
            animate={{ y: ['0%', '-50%'] }}
            transition={{ ease: 'linear', duration: 25, repeat: Infinity }}
            className="flex flex-col gap-6"
          >
            {[...certificateCol2, ...certificateCol2].map((src, index) => (
              <Image
                key={index}
                src={src}
                alt="Certificate"
                width={200}
                height={300}
                className="w-full object-cover opacity-60"
              />
            ))}
          </motion.div>
        </div>
        <div className="relative h-full overflow-hidden not-lg:hidden">
          <motion.div
            animate={{ y: ['-50%', '0%'] }}
            transition={{ ease: 'linear', duration: 25, repeat: Infinity }}
            className="flex flex-col gap-6"
          >
            {[...certificateCol3, ...certificateCol3].map((src, index) => (
              <Image
                key={index}
                src={src}
                alt="Certificate"
                width={200}
                height={300}
                className="w-full object-cover opacity-60"
              />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 flex h-full w-full items-end justify-center">
        <Image
          src="/img/thay-phuc.png"
          alt="Thầy Phúc"
          width={400}
          height={400}
          className="w-60 object-contain object-bottom"
          priority
        />
      </div>

      <div className="absolute bottom-0 left-0 z-20 flex h-50 w-full items-end justify-center bg-linear-to-t from-[#f5f5f5] to-transparent px-6 pb-4">
        <h1 className="text-primary text-center text-3xl font-bold tracking-wide uppercase">
          Đồng hành với hơn <span className="text-secondary">100</span> học viên đạt được mục tiêu
          HSK
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
