<template>
  <div>
    <small-banner />
    <HITransitionRoot as="template" :show="sidebarOpen">
      <HIDialog class="relative z-50 lg:hidden" @close="sidebarOpen = false">
        <HITransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
          enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
          leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-900/80" />
        </HITransitionChild>

        <div class="fixed inset-0 flex">
          <HITransitionChild as="template" enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full" enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
            leave-to="-translate-x-full">
            <HIDialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <HITransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
                enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </HITransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                <div class="flex h-16 shrink-0 items-center">
                  <img class="h-8 w-auto" src="/image/icons/e-smartclinic-white.svg" alt="e-Smart Clinic">
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                          <NuxtLink v-if="!item.children" :to="item.href"
                            :class="[item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6']">
                            <component :is="item.icon" class="h-6 w-6 shrink-0 " aria-hidden="true" />
                            {{ item.name }}
                          </NuxtLink>
                          <HIDisclosure v-else v-slot="{ open }" as="div">
                            <HIDisclosureButton
                              :class="[item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white', 'flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold leading-6 ']">
                              <component :is="item.icon" class="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                              {{ item.name }}
                              <ChevronRightIcon aria-hidden="true"
                                :class="[open ? 'rotate-90 text-gray-500' : 'text-gray-400', 'ml-auto h-5 w-5 shrink-0']" />
                            </HIDisclosureButton>
                            <HIDisclosurePanel as="ul" class="mt-1 px-2">
                        <li v-for="subItem in item.children" :key="subItem.name">
                          <NuxtLink as="a" :to="subItem.href"
                            :class="[subItem.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white', 'group flex gap-x-3 rounded-md py-2 pl-2 pr-2 text-sm leading-6 ']">
                            <ChevronRightIcon class="h-4 w-4 shrink-0 pt-1" aria-hidden="true" />
                            {{ subItem.name }}
                          </NuxtLink>
                        </li>
                        </HIDisclosurePanel>
                        </HIDisclosure>
                    </li>
                  </ul>
                  </li>


                  <li>
                    <div class="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                    <ul role="list" class="-mx-2 mt-2 space-y-1">
                      <li v-for="team in teams" :key="team.name">
                        <NuxtLink :to="team.href"
                          :class="[team.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6']">
                          <span
                            class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">{{
                              team.initial }}</span>
                          <span class="truncate">{{ team.name }}</span>
                        </NuxtLink>
                      </li>
                    </ul>
                  </li>
                  <li class="mt-auto">
                    <NuxtLink to="/admin/settings"
                      class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
                      <Cog6ToothIcon class="h-6 w-6 shrink-0" aria-hidden="true" />
                      Pengaturan
                    </NuxtLink>
                  </li>
                  </ul>
                </nav>
              </div>
            </HIDialogPanel>
          </HITransitionChild>
        </div>
      </HIDialog>
    </HITransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
        <div class="flex h-16 shrink-0 items-center">
          <img class="h-10 w-auto" src="/image/icons/e-smartclinic-white.svg" alt="e-Smart Clinic">
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <NuxtLink v-if="!item.children" :to="item.href"
                    :class="[item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6']">
                    <component :is="item.icon" class="h-6 w-6 shrink-0 " aria-hidden="true" />
                    {{ item.name }}
                  </NuxtLink>
                  <HIDisclosure v-else v-slot="{ open }" as="div">
                    <HIDisclosureButton
                      :class="[item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white', 'flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold leading-6 ']">
                      <component :is="item.icon" class="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                      {{ item.name }}
                      <ChevronRightIcon aria-hidden="true"
                        :class="[open ? 'rotate-90 text-gray-500' : 'text-gray-400', 'ml-auto h-5 w-5 shrink-0']" />
                    </HIDisclosureButton>
                    <HIDisclosurePanel as="ul" class="mt-1 px-2">
                <li v-for="subItem in item.children" :key="subItem.name">
                  <NuxtLink as="a" :to="subItem.href"
                    :class="[subItem.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white', 'group flex gap-x-3 rounded-md py-2 pl-2 pr-2 text-sm leading-6 ']">
                    <ChevronRightIcon class="h-5 w-5 shrink-0 pt-1" aria-hidden="true" />
                    {{ subItem.name }}
                  </NuxtLink>
                </li>
                </HIDisclosurePanel>
                </HIDisclosure>
            </li>
          </ul>
          </li>

          <li>
            <div class="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
            <ul role="list" class="-mx-2 mt-2 space-y-1">
              <li v-for="team in teams" :key="team.name">
                <NuxtLink :to="team.href"
                  :class="[team.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6']">
                  <span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">{{
                      team.initial }}</span>
                  <span class="truncate">{{ team.name }}</span>
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="mt-auto">
            <NuxtLink to="/admin/settings"
              class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
              <Cog6ToothIcon class="h-6 w-6 shrink-0" aria-hidden="true" />
              Pengaturan
            </NuxtLink>
          </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="lg:pl-72">
      <div
        class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>

        <!-- Separator -->
        <div class="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <form class="relative flex flex-1" action="#" method="GET">
            <label for="search-field" class="sr-only">Search</label>

            <button type="button" class="px-5 py-2.5 me-2 mb-2">
              <MagnifyingGlassIcon class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                aria-hidden="true" />
            </button>
          </form>

          <div class="flex items-center gap-x-4 lg:gap-x-6">
            <button type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Separator -->
            <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

            <!-- Profile dropdown -->
            <HIMenu as="div" class="relative">
              <HIMenuButton class="-m-1.5 flex items-center p-1.5">
                <span class="sr-only">Open user HIMenu</span>
                <img class="h-8 w-8 rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="">
                <span class="hidden lg:flex lg:items-center">
                  <span class="ml-4 text-sm font-semibold leading-6 text-gray-600" aria-hidden="true">Muhamad Haris
                    Setiawan</span>
                  <ChevronDownIcon class="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </HIMenuButton>
              <transition enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95">
                <HIMenuItems
                  class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  <HIMenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                    <NuxtLink :to="item.href"
                      :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">{{
                        item.name }}
                    </NuxtLink>
                  </HIMenuItem>
                </HIMenuItems>
              </transition>
            </HIMenu>
          </div>
        </div>
      </div>

      <main class="py-10">

        <div class="px-4 sm:px-6 lg:px-8">
          <nav class="flex" aria-label="Breadcrumb">
            <ol role="list" class="flex items-center space-x-4">
              <li>
                <div>
                  <NuxtLink to="#" class="text-gray-400 hover:text-gray-500">
                    <HomeIcon class="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                    <span class="sr-only">Home</span>
                  </NuxtLink>
                </div>
              </li>
              <li v-for="page in pages" :key="page.name">
                <div class="flex items-center">
                  <ChevronRightIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <NuxtLink :to="page.href" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                    :aria-current="page.current ? 'page' : undefined">{{ page.name }}</NuxtLink>
                </div>
              </li>
            </ol>
          </nav>

          <div class="pt-4">
            <slot />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Bars3Icon,
  BellIcon,
  Cog6ToothIcon,
  HomeIcon,
  XMarkIcon,
  ShieldCheckIcon,
  CommandLineIcon,
  PuzzlePieceIcon,
  PresentationChartBarIcon,
  UsersIcon,
  BeakerIcon,
  BookOpenIcon,
  CalendarDaysIcon,
  Squares2X2Icon,
  ChartBarIcon,
  VariableIcon,
  CalculatorIcon
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'

useHead({
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/image/icons/e-smartclinic.png",
    }, {
      rel: "apple-touch-icon",
      href: "https://e-smartclinic.id/storage/images/icons/icon.png",
    },
  ],
  bodyAttrs: {
    class: "h-full",
  },
  htmlAttrs: {
    lang: "id_ID",
    class: "h-full bg-white"
  }
});

useSeoMeta({
  charset: "utf-8",
  googlebotNews: "noindex",
  robots: "noindex,nofollow",
  viewport: "width=device-width, initial-scale=1.0",
  author: "PT Harmoni Untuk Bersama",
  ogUrl: "https://e-smartclinic.id/welcome-aboard",
  ogType: "website",
  ogSiteName: "https://e-smartclinic.id",
  ogTitle: "e-Smart Clinic Backend",
  ogDescription: "The Backend Dashboard with Medical Record support to all our beloved clinet of e-Smart Clinic for all Branchs & Market around the Indonesia.",
  ogImage: "https://e-smartclinic.id/image/icons/meta-properti.webp",
  ogLocale: "id_ID"
})

const navigation = [
  { name: 'Beranda', href: '/admin', icon: HomeIcon, current: true },
  {
    name: 'Otoritasi',
    icon: ShieldCheckIcon,
    current: false,
    children: [
      { name: 'Pengguna', href: '/admin/auth/users', current: false },
      { name: 'Hak Akses', href: '/admin/auth/role-privilages', current: false },
    ],
  },
  {
    name: 'System',
    icon: CommandLineIcon,
    current: false,
    children: [
      { name: 'Golongan Darah', href: '#', current: false },
      { name: 'Pendidikan Terakhir', href: '#', current: false },
      { name: 'Suku', href: '#', current: false },
      { name: 'Status Pernikahan', href: '#', current: false },
      { name: 'Marketing', href: '#', current: false },
      { name: 'Agama', href: '#', current: false },
      { name: 'Title', href: '#', current: false },
      { name: 'Status Pekerjaan', href: '#', current: false },
      { name: 'Title', href: '#', current: false },
      { name: 'Provinsi (Area)', href: '#', current: false },
      { name: 'Kota (Area)', href: '#', current: false },
      { name: 'Kecamatan (Area)', href: '#', current: false },
      { name: 'Kelurahan (Area)', href: '#', current: false },
    ],
  },
  {
    name: 'Tambahan',
    icon: PuzzlePieceIcon,
    current: false,
    children: [
      { name: 'Obat-Obatan', href: '#', current: false },
      { name: 'Layanan', href: '#', current: false },
      { name: 'Asuransi & Jaminan', href: '#', current: false },
      { name: 'Penyakit (Subjective)', href: '#', current: false },
      { name: 'Diagnosa (Assesment)', href: '#', current: false },
      { name: 'Prognosa (Assesment)', href: '#', current: false },
      { name: 'ICD-10 (Assesment)', href: '#', current: false },
    ],
  },
  { name: 'Info Klinik', href: '#', icon: PresentationChartBarIcon, current: false }, // Poli, UKP, Farmasi
  { name: 'Jadwal Praktik', href: '#', icon: CalendarDaysIcon, current: false },
  { name: 'Kontak (Pasien)', href: '#', icon: UsersIcon, current: false },
  {
    name: 'Rawat Jalan',
    icon: BeakerIcon,
    current: false,
    children: [
      { name: 'Penilaian (Assesment)', href: '#', current: false },
      { name: 'Asuransi & Jaminan', href: '#', current: false },
    ],
  },
  { name: 'Rekam Medis', href: '#', icon: BookOpenIcon, current: false },
  { name: 'Inventori', href: '#', icon: Squares2X2Icon, current: false },
  {
    name: 'Pembelian',
    icon: CalculatorIcon,
    current: false,
    children: [
      { name: 'lah gitu', href: '#', current: false },
    ],
  },
  { name: 'Laporan', href: '#', icon: ChartBarIcon, current: false },
  {
    name: 'Statistik (CRM)',
    icon: VariableIcon,
    current: false,
    children: [
      { name: 'lah gitu', href: '#', current: false },
    ],
  },
]

const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]

const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

const pages = [
  { name: 'Dashboard', href: '#', current: false },
]

const sidebarOpen = ref(false)

</script>

<style></style>