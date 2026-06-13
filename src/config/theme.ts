import { theme as antdTheme, ThemeConfig } from 'antd';

const baseTheme: ThemeConfig = {
  algorithm: antdTheme.darkAlgorithm,
  cssVar: {
    prefix: 'hsk',
  },
};

export const landingTheme: ThemeConfig = {
  ...baseTheme,
  token: {
    fontFamily: "'Inter', sans-serif",
    borderRadius: 12,
    controlHeight: 36,
    colorText: '#383838',
    colorPrimary: '#11264f',
    colorFillTertiary: '#f5f5f5',
    colorTextPlaceholder: '#7d7b7f',
  },
  components: {
    Button: {
      fontWeight: 600,
    },
    Layout: {
      headerBg: '#ffffff',
      headerHeight: 64,
      headerPadding: 0,
      bodyBg: '#ffffff',
    },
    Menu: {
      itemSelectedBg: '#d2d7dc',
      lineWidth: 0,
    },
  },
};

export const adminTheme: ThemeConfig = {
  ...baseTheme,
  token: {
    fontFamily: "'Nunito', sans-serif",
    colorPrimary: '#174D69',
  },
  components: {
    Layout: {
      headerBg: '#ffffff',
      headerPadding: '0 24px',
      lightSiderBg: '#174D69',
      siderBg: '#174D69',
    },
    Menu: {
      itemBg: 'transparent',
      itemColor: '#ffffff',
      itemHoverColor: '#ffffff',
    },
  },
};
