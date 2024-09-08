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
    'no-unused-vars': 'error',
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
    'no-console': [
      1,
      {
        allow: ['error', 'warn'],
      },
    ],
    'comma-dangle': ['error'],
    'no-debugger': 1,
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
    // Add the rule below to enforce PropTypes in your components
    'react/prop-types': ['error', { skipUndeclared: false }],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']], // Adjust based on your project structure
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Ensure these match your project files
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Ensure these extensions are set correctly
      },
    },
  },
};
