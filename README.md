# eslint-config-bravissimo-react

This is the ESLint configuration for [Bravissimo](http://bravissimolabs.com) projects that utilise [React](https://facebook.github.io/react/). It's based off [Airbnb's style guide](https://github.com/airbnb/javascript).

## Rules

There is currently just one difference to the [base Airbnb React rules](https://github.com/airbnb/javascript/tree/master/react):

- Disable [`react/require-extension`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-extension.md) due to it being deprecated in favour of [`import/extensions`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md)

## Installation

    $ npm install --save-dev \
        eslint@^3.2.2 \
        eslint-plugin-babel@^3.3.0 \
        eslint-plugin-import@^1.12.0 \
        eslint-plugin-jsx-a11y@^2.0.1 \
        eslint-plugin-react@^6.0.0 \
        eslint-config-bravissimo@^2.0.0

## Usage

Add the following lines to your `package.json`:

    "eslintConfig": {
      "extends": [
        "bravissimo-react"
      ]
    },

Alternatively, add the following to an `.eslintrc` file in your project root:

    {
      "extends": "bravissimo-react"
    }

## More information

Full details on configuring and using ESLint can be found on the [ESLint User Guide](http://eslint.org/docs/user-guide/).
