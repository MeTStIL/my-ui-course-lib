import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactCompiler from 'eslint-plugin-react-compiler';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  {
    files: ['src/**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      jsxA11y.flatConfigs.recommended,
      reactCompiler.configs.recommended,
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
      'react': react,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Автоматическое удаление неиспользуемых импортов
      'unused-imports/no-unused-imports': 'error',

      // Правила чистоты JSX
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
      'react/self-closing-comp': 'error',
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-no-useless-fragment': 'error',

      // Принудительное разделение значений и типов на отдельные строки
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
        },
      ],

      // Запрет inline-типов внутри фигурных скобок для принудительного переноса в import type
      '@typescript-eslint/no-import-type-side-effects': 'error',

      // Сортировка импортов единым сплошным блоком с фиксацией стилей в самом низу (включая *.css.ts от Vanilla Extract)
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            [
              // Встроенные модули Node.js
              '^node:',
              // Внешние пакеты
              '^@?\\w',
              // Внешние импорты типов
              '^@?\\w.*\\u0000$',
              // Абсолютные импорты и алиасы
              '^',
              // Относительные импорты типов
              '^\\..*\\u0000$',
              // Относительные импорты значений (исключая стили)
              '^\\.(?!.*\\.(s?css|css\\.ts)$)',
              // Файлы стилей
              '\\.(s?css|css\\.ts)$',
            ],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
  {
    // Отключение type-checked правил для конфигурационных файлов вне src/
    files: ['*.{js,mjs,ts}'],
    extends: [tseslint.configs.disableTypeChecked],
  },
  eslintConfigPrettier,
);
