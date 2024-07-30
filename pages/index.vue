<template>
  <div>
    <div class="bg-white">
      <header class="absolute inset-x-0 top-0 z-50">
        <div class="mx-auto max-w-7xl">
          <div class="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
            <nav
              class="flex items-center justify-between lg:justify-start"
              aria-label="Global">
              <a
                href="#"
                class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img
                  alt="Your Company"
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=orange&shade=600">
              </a>
              <button
                type="button"
                class="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
                @click="mobileMenuOpen = true">
                <span class="sr-only">Open main menu</span>
                <Bars3Icon
                  class="h-6 w-6"
                  aria-hidden="true" />
              </button>
              <div class="hidden lg:ml-12 lg:flex lg:gap-x-14">
                <NuxtLink
                  v-for="item in navigationHeader"
                  :key="item.name"
                  :href="item.href"
                  class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</NuxtLink>
              </div>
            </nav>
          </div>
        </div>
        <HIDialog
          class="lg:hidden"
          :open="mobileMenuOpen"
          @close="mobileMenuOpen = false">
          <div class="fixed inset-0 z-50" />
          <HIDialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
              <a
                href="#"
                class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=orange&shade=600"
                  alt="">
              </a>
              <button
                type="button"
                class="-m-2.5 rounded-md p-2.5 text-gray-700"
                @click="mobileMenuOpen = false">
                <span class="sr-only">Close menu</span>
                <XMarkIcon
                  class="h-6 w-6"
                  aria-hidden="true" />
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <a
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
                </div>
                <div class="py-6">
                  <a
                    href="#"
                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
                </div>
              </div>
            </div>
          </HIDialogPanel>
        </HIDialog>
      </header>

      <div class="relative">
        <div class="mx-auto max-w-7xl">
          <div class="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              class="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true">
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div class="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div class="hidden sm:mb-10 sm:flex">
                  <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Anim aute id magna aliqua ad ad non deserunt sunt. <a
                      href="#"
                      class="whitespace-nowrap font-semibold text-orange-600"><span
                        class="absolute inset-0"
                        aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></a>
                  </div>
                </div>
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Data to enrich your online business
                </h1>
                <p class="mt-6 text-lg leading-8 text-gray-600">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                </p>
                <div class="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    class="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Get started</a>
                  <a
                    href="#"
                    class="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            class="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
            alt="">
        </div>
      </div>
    </div>

    <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80&blend=111827&blend-mode=multiply&sat=-100&exp=15"
        alt=""
        class="absolute inset-0 -z-10 h-full w-full object-cover">
      <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10"
          aria-hidden="true">
          <div
            class="aspect-[1266/975] w-[79.125rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <h2 class="text-base font-semibold leading-8 text-orange-400">
            Our track record
          </h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by thousands of creators&nbsp;worldwide
          </p>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
          </p>
        </div>
        <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div
            v-for="stat in stats"
            :key="stat.id"
            class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
            <dt class="text-sm leading-6">
              {{ stat.name }}
            </dt>
            <dd class="order-first text-3xl font-semibold tracking-tight">
              {{ stat.value }}
            </dd>
          </div>
        </dl>
      </div>
    </div>

    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <h2 class="text-base font-semibold leading-7 text-orange-600">
            Pricing
          </h2>
          <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Pricing plans for teams of&nbsp;all&nbsp;sizes
          </p>
        </div>
        <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
        </p>
        <div class="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div
            v-for="(tier, tierIdx) in tiers"
            :key="tier.id"
            :class="[tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8', tierIdx === 0 ? 'lg:rounded-r-none' : '', tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '', 'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10']">
            <div>
              <div class="flex items-center justify-between gap-x-4">
                <h3
                  :id="tier.id"
                  :class="[tier.mostPopular ? 'text-orange-600' : 'text-gray-900', 'text-lg font-semibold leading-8']">
                  {{ tier.name }}
                </h3>
                <p
                  v-if="tier.mostPopular"
                  class="rounded-full bg-orange-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-orange-600">
                  Most popular
                </p>
              </div>
              <p class="mt-4 text-sm leading-6 text-gray-600">
                {{ tier.description }}
              </p>
              <p class="mt-6 flex items-baseline gap-x-1">
                <span class="text-4xl font-bold tracking-tight text-gray-900">{{ tier.priceMonthly }}</span>
                <span class="text-sm font-semibold leading-6 text-gray-600">/month</span>
              </p>
              <ul
                role="list"
                class="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                <li
                  v-for="feature in tier.features"
                  :key="feature"
                  class="flex gap-x-3">
                  <CheckIcon
                    class="h-6 w-5 flex-none text-orange-600"
                    aria-hidden="true" />
                  {{ feature }}
                </li>
              </ul>
            </div>
            <a
              :href="tier.href"
              :aria-describedby="tier.id"
              :class="[tier.mostPopular ? 'bg-orange-600 text-white shadow-sm hover:bg-orange-500' : 'text-orange-600 ring-1 ring-inset ring-orange-200 hover:ring-orange-300', 'mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600']">Buy plan</a>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
            <HIDisclosure
              v-for="faq in faqs"
              :key="faq.question"
              v-slot="{ open }"
              as="div"
              class="pt-6">
              <dt>
                <HIDisclosureButton class="flex w-full items-start justify-between text-left text-gray-900">
                  <span class="text-base font-semibold leading-7">{{ faq.question }}</span>
                  <span class="ml-6 flex h-7 items-center">
                    <PlusSmallIcon
                      v-if="!open"
                      class="h-6 w-6"
                      aria-hidden="true" />
                    <MinusSmallIcon
                      v-else
                      class="h-6 w-6"
                      aria-hidden="true" />
                  </span>
                </HIDisclosureButton>
              </dt>
              <HIDisclosurePanel
                as="dd"
                class="mt-2 pr-12">
                <p class="text-base leading-7 text-gray-600">
                  {{ faq.answer }}
                </p>
              </HIDisclosurePanel>
            </HIDisclosure>
          </dl>
        </div>
      </div>
    </div>

    <footer
      class="bg-gray-900"
      aria-labelledby="footer-heading">
      <h2
        id="footer-heading"
        class="sr-only">
        Footer
      </h2>
      <div class="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="grid grid-cols-2 gap-8 xl:col-span-2">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-white">
                  Solutions
                </h3>
                <ul
                  role="list"
                  class="mt-6 space-y-4">
                  <li
                    v-for="item in navigation.solutions"
                    :key="item.name">
                    <a
                      :href="item.href"
                      class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-white">
                  Support
                </h3>
                <ul
                  role="list"
                  class="mt-6 space-y-4">
                  <li
                    v-for="item in navigation.support"
                    :key="item.name">
                    <a
                      :href="item.href"
                      class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-white">
                  Company
                </h3>
                <ul
                  role="list"
                  class="mt-6 space-y-4">
                  <li
                    v-for="item in navigation.company"
                    :key="item.name">
                    <a
                      :href="item.href"
                      class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-white">
                  Legal
                </h3>
                <ul
                  role="list"
                  class="mt-6 space-y-4">
                  <li
                    v-for="item in navigation.legal"
                    :key="item.name">
                    <a
                      :href="item.href"
                      class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="mt-10 xl:mt-0">
            <h3 class="text-sm font-semibold leading-6 text-white">
              Subscribe to our newsletter
            </h3>
            <p class="mt-2 text-sm leading-6 text-gray-300">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <form class="mt-6 sm:flex sm:max-w-md">
              <label
                for="email-address"
                class="sr-only">Email address</label>
              <input
                id="email-address"
                type="email"
                name="email-address"
                autocomplete="email"
                required=""
                class="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                placeholder="Enter your email">
              <div class="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="submit"
                  class="flex w-full items-center justify-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <div class="flex space-x-6 md:order-2">
            <a
              v-for="item in navigation.social"
              :key="item.name"
              :href="item.href"
              class="text-gray-500 hover:text-gray-400">
              <span class="sr-only">{{ item.name }}</span>
              <component
                :is="item.icon"
                class="h-6 w-6"
                aria-hidden="true" />
            </a>
          </div>
          <p class="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; 2020 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineComponent, h } from 'vue'
import { Bars3Icon, XMarkIcon, MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'
import { CheckIcon } from '@heroicons/vue/20/solid'

useHead({
  title: 'e-Smart Clinic',
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

const navigationHeader = [
  { name: 'About', href: '/about' },
  { name: 'Features', href: '/' },
  { name: 'Marketplace', href: '/' },
  { name: 'Company', href: '/' },
  { name: 'Log in', href: '/auth' },
]

const stats = [
  { id: 1, name: 'Creators on the platform', value: '8,000+' },
  { id: 2, name: 'Flat platform fee', value: '3%' },
  { id: 3, name: 'Uptime guarantee', value: '99.9%' },
  { id: 4, name: 'Paid out to creators', value: '$70M' },
]

const tiers = [
  {
    name: 'Freelancer',
    id: 'tier-freelancer',
    href: '#',
    priceMonthly: '$24',
    description: 'The essentials to provide your best work for clients.',
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
    mostPopular: false,
  },
  {
    name: 'Startup',
    id: 'tier-startup',
    href: '#',
    priceMonthly: '$32',
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$48',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
    ],
    mostPopular: false,
  },
]

const faqs = [
  {
    question: 'What\'s the best thing about Switzerland?',
    answer:
      'I don\'t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
]

const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              'd': 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              'd': 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'X',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              d: 'M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z',
            }),
          ]),
      }),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              'd': 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              'd': 'M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
  ],
}

const mobileMenuOpen = ref(false)
</script>

<style></style>
