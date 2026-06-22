'use client';
import { cn } from '@/lib/utils';
import { motion, Variants } from 'framer-motion';
import { memo, useMemo } from 'react';

interface StaggerTextProps {
  text: string;
  className?: string;
  duration?: number; // Thời gian hiệu ứng cho mỗi từ
  staggerDelay?: number; // Thời gian trễ giữa các từ
}

const StaggerText = ({
  text,
  className,
  duration = 0.3,
  staggerDelay = 0.03,
}: StaggerTextProps) => {
  const tokens = text.split(/(\s|\n)/);

  const containerVariants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: staggerDelay }, // Tốc độ rải chữ tuần tự
      },
    }),
    [staggerDelay],
  );

  // Cấu hình hiệu ứng cho từng Từ Con
  const childVariants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 10 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: duration, ease: 'easeOut' },
      },
    }),
    [duration],
  );

  return (
    <p className={cn('relative whitespace-pre-wrap', className)}>
      <span className={'pointer-events-auto absolute inset-0 text-transparent select-text'}>
        {text}
      </span>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pointer-events-none inline select-none"
        aria-hidden="true"
      >
        {tokens.map((token, index) => {
          // Kịch bản 1: Nếu là ký tự xuống dòng \n, render thẻ <br /> để bẻ hàng đồng bộ
          if (token === '\n') {
            return <br key={index} />;
          }

          // Kịch bản 2: Nếu là khoảng trắng thông thường, giữ nguyên khoảng trắng inline
          if (token === ' ' || token === '\t') {
            return <span key={index}> </span>;
          }

          // Kịch bản 3: Nếu là từ/chữ, bọc trong thẻ motion để chạy hiệu ứng trượt lên
          return (
            <motion.span key={index} variants={childVariants} className="inline-block">
              {token}
            </motion.span>
          );
        })}
      </motion.span>
    </p>
  );
};

export default memo(StaggerText);
