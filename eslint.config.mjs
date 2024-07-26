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
    },
  }
);
// Your custom configs here
