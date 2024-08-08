// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  routeRules: {
    '/': { prerender: true },
    // '/api/*': { cache: { maxAge: 60 * 60 } },
  },
  build: {
    transpile: [
      '@headlessui/vue',
      '@heroicons/vue',
    ],
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    'nuxt-csurf',
  ],
  csurf: {
    methodsToProtect: [
      'PUT',
      'PATCH',
      // 'POST',
      'DELETE',
    ],
    headerName: 'csrf-token',
  },
  css: ['~/assets/css/main.css'],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
