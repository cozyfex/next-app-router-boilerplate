const eslintConfig = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'prettier',
  ],
  parserOptions: {
    'project': './tsconfig.json',
    'createDefaultProgram': true,
  },
  // 전역객체를 eslint가 인식하는 구간
  env: {
    // document나 window 인식되게 함
    browser: true,
    node: true,
    es6: true,
  },
  // eslint 미적용될 폴더나 파일 명시
  ignorePatterns: [
    'node_modules/',
  ],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'next/core-web-vitals',
    // ts 권장
    'plugin:@typescript-eslint/recommended',
    // eslint의 포매팅을 prettier로 사용.
    'plugin:prettier/recommended',
    // eslint-config-prettier prettier와 중복된 eslint 규칙 제거
    'prettier',
  ],
  rules: {
    // react 17부턴 import 안해도돼서 기능 끔
    'react/react-in-jsx-scope': 'off',
    // 경고표시, 파일 확장자를 .ts나 .tsx 모두 허용함
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: [
          '.ts',
          '.tsx',
        ],
      },
    ],
    // 불필요한 catch 못쓰게 하는 기능 끔
    'no-useless-catch': 'off',
  },
};

export default eslintConfig;