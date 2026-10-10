import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import unusedImports from 'eslint-plugin-unused-imports';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintConfigPrettier from 'eslint-config-prettier';
import react from 'eslint-plugin-react';

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
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

      // Удаление фигурных скобок у строковых JSX-пропов
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],

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

      // Сортировка импортов единым сплошным блоком с фиксацией стилей в самом низу (без пустых строк)
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
              '^\\.(?!.*\\.s?css$)',
              // Файлы стилей
              '\\.s?css$',
            ],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
  eslintConfigPrettier,
);
