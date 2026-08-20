import { adminDb } from '@/lib/firebase-admin';
import { SiteSettings } from '@/types';
import { revalidateTag, unstable_cache } from 'next/cache';

const getSettingsDoc = () => adminDb.collection('site_settings').doc('landing');

const defaultTickerTexts = [
  '🎯 “Đang tuyển sinh lớp online tháng này“',
  '🎉 “Quà Tặng Hấp Dẫn - Đăng Ký Ngay”',
  '💥 “Hỗ Trợ Học Thử Miễn Phí - Test Đầu Vào Miễn Phí”',
];

export const getSiteSettings = () =>
  unstable_cache(
    async () => {
      const snapshot = await getSettingsDoc().get();
      const data = snapshot.data();

      return {
        tickerTexts: data?.tickerTexts ?? defaultTickerTexts,
      } as SiteSettings;
    },
    ['site-settings'],
    { tags: ['text-ticker', 'site-settings'] },
  )();

export const updateSiteSettings = async (data: SiteSettings) => {
  await getSettingsDoc().set(data, { merge: true });

  revalidateTag('text-ticker', 'max');
  revalidateTag('site-settings', 'max');

  return data;
};
