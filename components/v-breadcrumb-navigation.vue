<template>
  <div>
    <nav
      class="flex"
      aria-label="Breadcrumb">
      <ol
        role="list"
        class="flex items-center space-x-4">
        <li>
          <div>
            <NuxtLink
              to="#"
              class="text-gray-400 hover:text-gray-500">
              <HomeIcon
                class="h-5 w-5 flex-shrink-0"
                aria-hidden="true" />
              <span class="sr-only">Home</span>
            </NuxtLink>
          </div>
        </li>
        <li
          v-for="page in props.navs"
          :key="page.name">
          <div class="flex items-center">
            <ChevronRightIcon
              class="h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true" />
            <NuxtLink
              :to="page.link"
              class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              :aria-current="page.active ? 'page' : undefined">{{ page.name }}</NuxtLink>
          </div>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { HomeIcon } from '@heroicons/vue/24/outline'
import { ChevronRightIcon } from '@heroicons/vue/20/solid'

const props = defineProps<{
  navs: {
    name: string;
    link: string;
    active: boolean;
  }[]
}>();

</script>
