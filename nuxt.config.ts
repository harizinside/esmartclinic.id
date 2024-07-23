// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-mongoose",
  ],
  mongoose: {
    options: {},
    modelsDir: "./server/models",
    devtools: true,
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
});
