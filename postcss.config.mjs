const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
  'postcss-preset-env': {
    stage: 3,
    features: {
      'nesting-rules': true,
    },
  },
};

export default config;
