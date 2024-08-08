<template>
  <div>
    <span>{{ relativeDate ?? '-' }}</span>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

// Extend dayjs with the relativeTime plugin
dayjs.extend(relativeTime)

const relativeDate = ref<string>()
const props = defineProps<{
  datetime: string
}>()

onMounted(() => {
  const parsedDate = dayjs(props.datetime)
  relativeDate.value = parsedDate.fromNow() // Get relative time from now
})
</script>

<style>

</style>
