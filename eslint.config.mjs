import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      'no-console': 'warn',
      'nuxt/prefer-import-meta': 'error',
      'vue/html-closing-bracket-newline': 'off',
    },
  },
)
