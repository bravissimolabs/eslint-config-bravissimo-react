module.exports = {
  extends: [
    'eslint-config-bravissimo',
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y'
  ].map(require.resolve),
  rules: {
    'react/require-extension': 0,

    'react/sort-comp': [2, {
      'order': [
        'type-annotations',
        'static-methods',
        'lifecycle',
        'everything-else',
        '/^render.+$/',
        'render'
      ]
    }],

    // Disabled due to clashes with react-intl's 'style' prop.
    'react/style-prop-object': 'off',

    // Disabled to help prevent browser compatibility issues.
    'jsx-a11y/no-static-element-interactions': 'off',

    // Disabled as we use flow type.
    'react/forbid-prop-types': 'off',
    'react/require-default-props': 'off'
  }
};
