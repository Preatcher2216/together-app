module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'google',
    'plugin:react-hooks/recommended',
    'prettier',
    // 'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  ignorePatterns: ['modernizr-custom.js'],
  rules: {
    'no-console': 'warn',
    'react/jsx-uses-react': 'off', // because of new JSX transform https://ru.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
    'react/react-in-jsx-scope': 'off', // because of new JSX transform https://ru.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
    'require-jsdoc': 'off',
    '@typescript-eslint/indent': ['warn', 2, {flatTernaryExpressions: true, SwitchCase: 1}],
    '@typescript-eslint/no-unused-vars': ['warn', {vars: 'all', args: 'after-used', ignoreRestSiblings: true}],
    camelcase: 'warn',
    'react/prop-types': 'off', // We will use TypeScript'p
    '@typescript-eslint/ban-types': ['warn'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'spaced-comment': ['error', 'always', {markers: ['/']}],
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'default',
        format: ['strictCamelCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: 'objectLiteralProperty',
        format: ['camelCase', 'snake_case'],
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    'no-invalid-this': 'off',
    'no-unused-vars': 'warn',
    'new-cap': ['error', {capIsNewExceptions: ['Dinero']}],
  },
};
