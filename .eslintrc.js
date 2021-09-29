module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'next',
    'plugin:react/recommended',
    'standard',
    'prettier-standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    '@next/next/no-document-import-in-page': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off'
  }
}
