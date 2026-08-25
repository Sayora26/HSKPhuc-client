export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://afuchinese.com';

export const LINKS = {
  TIKTOK: 'https://www.tiktok.com/@tiengtrungafu',
  FACEBOOK: 'https://www.facebook.com/tiengtrungafu',
  YOUTUBE: 'https://www.youtube.com/@tiengtrungafu',
  MESSENGER: 'https://m.me/tiengtrungafu',
  ZALO: 'https://zalo.me/84853599365',
};

export const PATHS = {
  HOME: '/',
  INTRODUCTION: '/gioi-thieu',
  COURSES: {
    MASS_COURSE: '/khoa-hoc/khoa-dai-tra',
    VIP_COURSE: '/khoa-hoc/khoa-vip',
  },
  REVIEWS: '/danh-gia',
  REGISTRATION: '/dang-ky-hoc',

  ADMIN: {
    DASHBOARD: '/admin',
    COURSES: '/admin/khoa-hoc',
    CLASSES: '/admin/lop-hoc',
    SETTINGS: '/admin/cai-dat',
  },

  UNAUTHORIZED: '/unauthorized',
  AUTH: {
    LOGIN: '/auth/dang-nhap',
    REGISTER: '/auth/dang-ky',
  },
};
