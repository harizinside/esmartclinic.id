<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
useHead({
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
    class: 'h-full bg-white',
  },
})

useSeoMeta({
  title: 'e-Smart Clinic Backend',
  description: 'The Backend Dashboard with Medical Record support to all our beloved clinet of e-Smart Clinic for all Branchs & Market around the Indonesia.',
  charset: 'utf-8',
  googlebotNews: 'noindex',
  viewport: 'width=device-width, initial-scale=1.0',
  author: 'PT Harmoni Untuk Bersama',
  ogUrl: 'https://e-smartclinic.id/welcome-aboard',
  ogType: 'website',
  ogSiteName: 'https://e-smartclinic.id',
  ogTitle: 'e-Smart Clinic Backend',
  ogDescription: 'The Backend Dashboard with Medical Record support to all our beloved clinet of e-Smart Clinic for all Branchs & Market around the Indonesia.',
  ogImage: 'https://e-smartclinic.id/image/icons/meta-properti.webp',
  ogLocale: 'id_ID',
  twitterCard: 'summary_large_image',
  twitterTitle: 'e-Smart Clinic Backend',
  twitterDescription: 'The Backend Dashboard with Medical Record support to all our beloved clinet of e-Smart Clinic for all Branchs & Market around the Indonesia.',
  twitterImage: 'https://e-smartclinic.id/image/icons/meta-properti.webp',
})

useServerSeoMeta({
  robots: 'noindex, nofollow',
})
</script>

<style></style>
