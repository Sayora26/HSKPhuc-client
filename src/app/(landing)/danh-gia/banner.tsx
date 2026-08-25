'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { MouseEvent } from 'react';

export default function RegisterBannerVisual() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const dotsX = useTransform(mouseX, [-0.5, 0.5], [-30, 30]);
  const dotsY = useTransform(mouseY, [-0.5, 0.5], [-30, 30]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="after:from-primary relative flex h-full items-center justify-center after:absolute after:inset-x-0 after:-bottom-8 after:z-20 after:block after:h-60 after:bg-linear-to-t after:to-transparent"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: [0, 1.1, 0.95, 1.05, 1], opacity: 1 }} // ⚡ Chuỗi Keyframes nảy/tỏa 2-3 nhịp
        viewport={{ once: true, amount: 0.8 }} // ⚡ Chỉ chạy khi cuộn xuống thấy ít nhất 80% khung hình
        transition={{
          duration: 2, // Tăng tổng thời gian animation lên 2 giây
          delay: 0.3, // ⚡ Trễ 0.3 giây sau khi cuộn tới mới bắt đầu xuất hiện
          ease: 'easeInOut',
          times: [0, 0.4, 0.6, 0.8, 1], // Phân bổ thời gian cho từng nhịp nảy
        }}
        style={{ x: dotsX, y: dotsY }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <Image
          src="/img/dots.png"
          alt="Đăng ký tư vấn"
          width={500}
          height={500}
          className="h-full object-contain"
        />
      </motion.div>

      <Image
        src="/img/register-banner2.png"
        alt="Đăng ký tư vấn"
        width={500}
        height={500}
        className="pointer-events-none relative z-10 -mb-8 h-120 object-contain"
      />
    </div>
  );
}
