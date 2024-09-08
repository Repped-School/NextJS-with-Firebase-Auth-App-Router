module.exports = {
  extends: ['next', 'next/core-web-vitals', 'airbnb', 'prettier'],
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'no-unused-vars': 'error', // Ensure no unused variables show errors
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-alert': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-one-expression-per-line': [0],
    // Set to 'error' so console logs are visible during development
    'no-console': [
      'error',
      {
        allow: ['log', 'warn', 'error'], // Allow all types of console logs
      },
    ],
    'comma-dangle': ['error'],
    'no-debugger': 'warn', // Display debugger warnings but not fail build
    'linebreak-style': 0,
    'max-len': [1, 600, 2],
    'no-plusplus': [
      2,
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/prop-types': ['error', { skipUndeclared: false }],
    'react/require-default-props': [
      'error',
      {
        forbidDefaultForRequired: true,
        ignoreFunctionalComponents: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
