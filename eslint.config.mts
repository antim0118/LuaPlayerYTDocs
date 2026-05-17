import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
  stylistic.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: {
      js,
      '@stylistic': stylistic,
    },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    rules: {
      'eqeqeq': ['error', 'always'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/max-len': ['error', { code: 150 }],
      '@stylistic/arrow-spacing': ['error'],
      '@stylistic/no-confusing-arrow': ['error'],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],
      '@stylistic/arrow-parens': ['error', 'always'],
      'arrow-body-style': ['error', 'as-needed'],
      'func-style': ['error', 'expression', { allowArrowFunctions: true }],
      '@typescript-eslint/no-require-imports': ['off'],
    },
  },
  tseslint.configs.recommended,

  { ignores: ['build/', 'node_modules/', '_src/'] },
])
