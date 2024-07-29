<template>
  <div>
    <span>{{ relativeDate ?? '-' }}</span>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { DateTime } from 'luxon'

const relativeDate = ref()
const props = defineProps<{
  datetime: string
}>()

onMounted(() => {
  const parsedDate = DateTime.fromISO(props.datetime).setLocale('id')
  relativeDate.value = parsedDate.toRelative()
})
</script>

<style>

</style>
