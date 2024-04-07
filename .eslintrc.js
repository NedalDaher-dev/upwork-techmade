module.exports = {
  extends: ['airbnb'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      js: true,
    },
  },

  env: {
    browser: true,
    node: true,
  },
  rules: {
    // 'import/prefer-default-export': ['off', { target: 'single' }]
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'linebreak-style': 0,
    'react/no-array-index-key': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/jsx-wrap-multilines': 'off',
    'function-paren-newline': 'off',
    'no-unused-expressions': 'off',
    'max-len': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'react/jsx-curly-newline': 'off',
    indent: 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-nested-ternary': 'off',
    'import/no-cycle': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    'no-restricted-exports': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'comma-dangle': 'off',
    'no-console': 'off',
    'import/named': 'off',
    'import/prefer-default-export': 'off',
    'prefer-const': 'warn',
    'no-unused-vars': 'off',
    'prefer-arrow-callback': 'warn',
    'no-undef': 'error',
    'no-use-before-define': 'error',
    'react/prop-types': 0,
    'no-new-object': 'warn',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'no-trailing-spaces': 'off',
    'jsx-quotes':'off',
    "react/jsx-indent": "off",
    "semi": "off",

    'react/function-component-definition': [
      'warn',
      {
        namedComponents: ['arrow-function', 'function-expression'],
        unnamedComponents: ['arrow-function', 'function-expression'],
      },
    ],
    'import/extensions': ['off', 'never'],
    'no-confusing-arrow': [
      'off',
      { allowParens: true, onlyOneSimpleParam: false },
    ],
    'implicit-arrow-linebreak': ['off', 'beside'],
    'react/jsx-one-expression-per-line': ['off', { allow: 'none' }],
    'jsx-a11y/control-has-associated-label': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-constructed-context-values': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', '.'],
          // Add more aliases as needed
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
      node: {
        extensions: ['.js', '.jsx', '.json'],
        paths: ['.', './src', './public'], // Add other paths as needed
      },
    },
  },
};
