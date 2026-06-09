import { theme as antdTheme, ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  algorithm: antdTheme.darkAlgorithm,
  cssVar: {
    prefix: 'hsk',
  },
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

export default theme;
