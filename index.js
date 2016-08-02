module.exports = {
  extends: [
    'eslint-config-bravissimo',
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y'
  ].map(require.resolve),
  rules: {
    'react/require-extension': 0
  }
};
