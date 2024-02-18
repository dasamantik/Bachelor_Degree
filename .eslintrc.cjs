module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    node: true,
    es2022: true,
  },
  plugins: ['import'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    indent: ['error', 2],
    prettier/prettier: [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-console': 'off',
    'prettier/prettier': ['error'],
    'no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
      },
    ],
    'prefer-const': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'object-shorthand': ['error', 'always'],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
      },
    ],
    'no-shadow': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-template': 'error',
    'no-return-await': 'error',
    eqeqeq: 'error',
    'no-extra-boolean-cast': 'error',
    'block-spacing': 'error',
    camelcase: [
      'error',
      {
        properties: 'never',
      },
    ],
    'no-trailing-spaces': 'error',
    'keyword-spacing': 'error',
    'space-before-blocks': 'error',
    'eol-last': 'error',
    'no-var': 'error',
    'prefer-destructuring': [
      'error',
      {
        object: true,
        array: false,
      },
    ],
    'no-template-curly-in-string': 'error',
    'no-else-return': 'error',
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
        amd: true,
        caseSensitive: true,
        ignore: ['^path-to-restricted-file$'],
      },
    ],
  },
};
