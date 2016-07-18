# eslint-config-bravissimo-react

This is the ESLint configuration for [Bravissimo](http://bravissimolabs.com) projects that utilise [React](https://facebook.github.io/react/). It's based off [Airbnb's style guide](https://github.com/airbnb/javascript).

## Rules

There are currently no differences to the [base Airbnb React rules](https://github.com/airbnb/javascript/tree/master/react). However, rather than taking a dependency on the [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb) package, the rules are replicated here.

This is due to `eslint-config-airbnb` and `eslint-plugin-react` still having a peerDependency on ESlint v2 - once it gets updated to use v3, the cloned rules can be swapped out and the Airbnb package taken as a dependency. This is currently blocked by a couple of its own dependencies - see https://github.com/airbnb/javascript/issues/936#issuecomment-230108045.

## Installation

    $ npm install --save-dev \
        eslint@^3.0.1 \
        eslint-plugin-babel@^3.3.0 \
        eslint-plugin-import@^1.10.2
        eslint-plugin-jsx-a11y@^2.0.1 \
        eslint-plugin-react@next \
        eslint-config-bravissimo@^1.0.1 \

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
