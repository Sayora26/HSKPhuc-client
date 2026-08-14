import { Container } from '@/components/ui';
import { formatDate } from '@/lib/dayjs';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

const getTickerTexts = async () => {
  const snapshot = await getDoc(doc(db, 'site_settings', 'landing'));
  const data = snapshot.data();
  return (
    data?.tickerTexts || [
      `🎯 “Đang tuyển sinh lớp online tháng ${formatDate(new Date(), 'M')}“`,
      '🎉 “Quà Tặng Hấp Dẫn - Đăng Ký Ngay”',
      '💥 “Hỗ Trợ Học Thử Miễn Phí - Test Đầu Vào Miễn Phí”',
    ]
  );
};

const TextTicker = async () => {
  const texts = await getTickerTexts();

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
