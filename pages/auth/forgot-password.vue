<template>
  <div class="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md pt-4">
      <img
        class="mx-auto h-20 w-auto"
        src="/image/icons/e-smartclinic.svg"
        alt="e-Smart Clinicy">
      <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Forgot password
      </h2>
    </div>

    <div class="sm:mx-auto sm:w-full sm:max-w-[480px]">
      <div class="px-6 py-12 sm:px-12">
        <form
          class="space-y-6"
          action="#"
          method="POST">
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
              <input
                id="email"
                type="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                placeholder="name@provider.com"
                required>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
              Send
              Email
            </button>
          </div>
        </form>
        <p class="mt-10 text-center text-sm text-gray-500">
          Punya akun?
          {{ ' ' }}
          <NuxtLink
            to="/auth"
            class="font-semibold leading-6 text-orange-600 hover:text-orange-500">Masuk disini
          </NuxtLink>
        </p>
      </div>

      <p class="mt-10 text-center text-sm font-medium text-gray-500 dark:text-white">
        Diperhatikan dan diawasi oleh
      </p>
      <div class="flex gap-4 place-content-center pt-4">
        <div>
          <img
            src="/image/icons/third-part-satusehat.svg"
            class="w-full h-10"
            alt="image description">
        </div>
        <div>
          <img
            src="/image/icons/third-part-kominfo.png"
            class="w-full h-10"
            alt="image description">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Forgot Password | e-Smart Clinic',
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/image/icons/e-smartclinic.png',
    }, {
      rel: 'apple-touch-icon',
      href: 'https://e-smartclinic.id/storage/images/icons/icon.png',
    },
  ],
  bodyAttrs: {
    class: 'h-full',
  },
  htmlAttrs: {
    lang: 'id_ID',
    class: 'h-full bg-gray-50',
  },

})

useSeoMeta({
  charset: 'utf-8',
  googlebotNews: 'noindex',
  robots: 'noindex,nofollow',
  viewport: 'width=device-width, initial-scale=1.0',
  author: 'PT Harmoni Untuk Bersama',
  ogUrl: 'https://e-smartclinic.id/welcome-aboard',
  ogType: 'website',
  ogSiteName: 'https://e-smartclinic.id',
  ogTitle: 'e-Smart Clinic Backend',
  ogDescription: 'The Backend Dashboard with Medical Record support to all our beloved clinet of e-Smart Clinic for all Branchs & Market around the Indonesia.',
  ogImage: 'https://e-smartclinic.id/image/icons/meta-properti.webp',
  ogLocale: 'id_ID',
})
</script>

<style></style>
