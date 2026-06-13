'use client';

import { Container } from '@/components/ui';

interface TextTickerProps {
  texts?: string[];
}

const TextTicker = ({
  texts = [
    '🎯 “Đang tuyển sinh lớp online tháng 7“',
    '🎉 “Quà Tặng Hấp Dẫn - Đăng Ký Ngay”',
    '💥 “Hỗ Trợ Học Thử Miễn Phí - Test Đầu Vào Miễn Phí”',
  ],
}: TextTickerProps) => {
  return (
    <div className="bg-linear-180 from-[#dab76b] to-[#eace8e] py-4">
      <h3 className="sr-only">{texts.join(' - ')}</h3>

      <Container>
        <div className="overflow-hidden">
          <div className="flex w-max min-w-full flex-row flex-nowrap gap-24" aria-hidden="true">
            <div className="animate-ticker flex gap-24 text-base font-semibold whitespace-nowrap">
              {[...texts, ...texts].map((text, index) => (
                <span key={index} className="whitespace-pre">
                  {text}
                </span>
              ))}
            </div>

            <div className="animate-ticker flex gap-24 text-base font-semibold whitespace-nowrap">
              {[...texts, ...texts].map((text, index) => (
                <span key={index} className="whitespace-pre">
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TextTicker;
