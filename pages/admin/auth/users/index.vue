<template>
  <div>
    users
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const route = useRoute()

// console.log(route)

definePageMeta({
  layout: 'admin',
})

useHead({
  title: 'Users | e-Smart Clinic',
})
</script>

<style></style>
