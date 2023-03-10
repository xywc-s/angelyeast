const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  env: {
    es2021: true,
    browser: true,
    node: true
  },
  ignorePatterns: ['node_modules', 'lib', 'es'],
  parser: '@typescript-eslint/parser',
  extends: ['standard', 'prettier'],
  plugins: ['import', 'prettier'],
  rules: {
    // 'no-unused-vars': 'off',
    'no-dupe-class-members': 'off',
    'prettier/prettier': 'error',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
          'index',
          'object',
          'type'
        ]
      }
    ]
  },
  overrides: [
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser'
    },
    {
      rules: {
        files: ['*.ts'],
        'no-redeclare': 'off'
      }
    },
    {
      files: ['*.js'],
      rules: {}
    },
    {
      files: ['**/__tests__/**'],
      rules: {
        'no-console': 'off',
        'vue/one-component-per-file': 'off'
      }
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'version',
              'private',
              'packageManager',
              'description',
              'type',
              'keywords',
              'homepage',
              'bugs',
              'license',
              'author',
              'contributors',
              'funding',
              'files',
              'main',
              'module',
              'exports',
              'unpkg',
              'jsdelivr',
              'browser',
              'bin',
              'man',
              'directories',
              'repository',
              'publishConfig',
              'scripts',
              'peerDependencies',
              'peerDependenciesMeta',
              'optionalDependencies',
              'dependencies',
              'devDependencies',
              'engines',
              'config',
              'overrides',
              'pnpm',
              'husky',
              'lint-staged',
              'eslintConfig'
            ]
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' }
          }
        ]
      }
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': 'off'
      }
    },

    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        // https://eslint.vuejs.org/rules/ ??????????????????
        'no-undef': 'off',
        'vue/no-unused-vars': 'error',
        'vue/no-unused-components': 'error',
        'vue/multi-word-component-names': 0, // ??????????????????????????? 0: ??????, ?????????off
        'vue/require-default-prop': 'off', // props ?????????????????????
        'vue/require-prop-types': 0, // props??????????????????
        'no-dupe-class-members': 'off' // ts?????????, ??????????????????
      }
    }
  ]
})
