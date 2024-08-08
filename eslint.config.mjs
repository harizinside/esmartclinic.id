import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // your custom flat configs go here, for example:
  {
    rules: {
      'no-console': 'off',
      'nuxt/prefer-import-meta': 'error',
      'vue/html-closing-bracket-newline': 'off',
    },
  },
  // {
  //   ...
  // }
)
