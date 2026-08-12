import { theme as antdTheme, ThemeConfig } from 'antd';
import { merge } from 'lodash';

const variables = {
  colorPrimary: '#11264f',
  colorYellow: '#ae8845',
};

const baseTheme: ThemeConfig = {
  algorithm: antdTheme.darkAlgorithm,
  cssVar: {
    prefix: 'hsk',
  },
  components: {
    Button: {
      onlyIconSize: 16,
      onlyIconSizeSM: 16,
      onlyIconSizeLG: 18,
      fontSizeIcon: 16,
    },
  },
};

const landingSpecificTheme: ThemeConfig = {
  token: {
    fontFamily: "'Inter', sans-serif",
    borderRadius: 12,
    controlHeight: 36,
    colorText: '#383838',
    colorPrimary: variables.colorPrimary,
    colorFillTertiary: '#f5f5f5',
    colorTextPlaceholder: '#7d7b7f',
    yellowHover: '#ba9f68',
    yellowActive: '#87642f',
    colorLink: '#ffffff',
  },
  components: {
    Button: {
      fontWeight: 600,
      yellow6: '#ae8845',
    },
    Layout: {
      headerBg: '#ffffff',
      headerHeight: 64,
      headerPadding: 0,
      bodyBg: '#ffffff',
      footerBg: variables.colorPrimary,
      footerPadding: 0,
    },
    Menu: {
      itemSelectedBg: '#d2d7dc',
      lineWidth: 0,
    },
    Modal: {
      titleFontSize: 18,
    },
    Radio: {
      buttonSolidCheckedBg: '#ae8845',
      buttonSolidCheckedHoverBg: '#ba9f68',
      buttonSolidCheckedActiveBg: '#87642f',
      buttonSolidCheckedColor: '#ffffff',
    },
    Steps: {
      colorPrimary: variables.colorYellow,
      colorPrimaryHover: '#ba9f68',
      dotSize: 18,
      dotCurrentSize: 18,
    },
  },
};

export const landingTheme = merge({}, baseTheme, landingSpecificTheme);

const adminSpecificTheme: ThemeConfig = {
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

export const adminTheme = merge({}, baseTheme, adminSpecificTheme);
