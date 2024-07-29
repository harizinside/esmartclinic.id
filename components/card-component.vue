<template>
  <div>
    <dl class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="item in stats"
        :key="item.id"
        class="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
        <dt>
          <div class="absolute rounded-md bg-orange-500 p-3">
            <component
              :is="item.icon"
              class="h-6 w-6 text-white"
              aria-hidden="true" />
          </div>
          <p class="ml-16 truncate text-sm font-medium text-gray-500">
            {{ item.name }}
          </p>
        </dt>
        <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
          <p class="text-2xl font-semibold text-gray-900">
            {{ item.stat }}
          </p>
          <div class="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
            <div class="text-sm">
              <a
                href="#"
                class="font-medium text-orange-600 hover:text-orange-500">Lihat Semua<span class="sr-only">
                  {{
                    item.name }} stats</span></a>
            </div>
          </div>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script lang="ts" setup>
import { PaperClipIcon, CreditCardIcon, UsersIcon, ChatBubbleLeftRightIcon } from '@heroicons/vue/24/outline'

const stats = [
  { id: 1, name: 'Pasien Baru', stat: '149', icon: UsersIcon, change: '122', changeType: 'increase' },
  { id: 2, name: 'Konsultasi', stat: '112', icon: ChatBubbleLeftRightIcon, change: '5.4%', changeType: 'increase' },
  { id: 3, name: 'Penebusan Obat', stat: '64', icon: PaperClipIcon, change: '3.2%', changeType: 'decrease' },
  { id: 4, name: 'Total Pendapatan', stat: '245 K', icon: CreditCardIcon, change: '3.2%', changeType: 'decrease' },
]
</script>

<style></style>
