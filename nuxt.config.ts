// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  routeRules: {
    // Generated at build time for SEO purpose
    "/": { prerender: true },
    // Cached for 1 hour
    "/api/*": { cache: { maxAge: 60 * 60 } },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-csurf",
    "nuxt-headlessui",
    "nuxt-mongoose",
  ],
  mongoose: {
    options: {},
    modelsDir: "./server/models",
    devtools: true,
  },
  csurf: {
    methodsToProtect: ["POST", "PUT", "PATCH"],
    headerName: "csrf-token",
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
  headlessui: {
    prefix: "HI",
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
});
