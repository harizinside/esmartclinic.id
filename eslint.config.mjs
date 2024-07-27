// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  // your custom flat configs go here, for example:
  {
    rules: {
      "vue/first-attribute-linebreak": [
        "warn",
        {
          singleline: "ignore",
          multiline: "beside",
        },
      ],
      "vue/max-attributes-per-line": [
        "warn",
        {
          singleline: { max: 2 },
          multiline: { max: 3 },
        },
      ],
      "vue/html-closing-bracket-newline": [
        "warn",
        {
          multiline: "never",
        },
      ],
      "vue/html-indent": ["warn", 2],
    },
  }
);
// Your custom configs here
