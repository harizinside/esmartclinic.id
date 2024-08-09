<template>
  <div>
    <div class="relative overflow-x-auto sm:rounded-lg p-1">
      <div class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <Menu
          as="div"
          class="relative inline-block text-left pt-3.5">
          <MenuButton class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            <span class="font-medium">Limit</span>&nbsp;10
            <svg
              class="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4" />
            </svg>
          </MenuButton>
          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <MenuItems class="absolute left-0 mt-2 w-20 origin-top-right divide-y p-1 divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              <MenuItem v-slot="{ active }">
                <a
                  :class="[
                    active ? 'bg-orange-500 ' : ' dark:text-gray-200',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white',
                  ]"
                  href="/account-settings">
                  20
                </a>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <a
                  :class="[
                    active ? 'bg-orange-500 ' : ' dark:text-gray-200',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white',
                  ]"
                  href="/account-settings">
                  50
                </a>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <a
                  :class="[
                    active ? 'bg-orange-500 ' : ' dark:text-gray-200',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white',
                  ]"
                  href="/account-settings">
                  100
                </a>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>

        <div class="flex gap-2">
          <button
            type="button"
            class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-filter size-5"
              viewBox="0 0 16 16">
              <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
            </svg>
          </button>
          <div class="relative">
            <input
              id="table-search-users"
              type="text"
              class="block text-sm text-gray-900 border border-gray-300 rounded-lg w-80 py-2 bg-gray-50 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              placeholder="Cari">
          </div>
        </div>
      </div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th
              scope="col"
              class="p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label
                  for="checkbox-all-search"
                  class="sr-only">checkbox</label>
              </div>
            </th>
            <th
              scope="col"
              class="px-6 py-3">
              &nbsp;
            </th>
            <th
              scope="col"
              class="px-6 py-3">
              <div class="flex items-center">
                Name
                <a href="#"><svg
                  class="w-3 h-3 ms-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                </svg></a>
              </div>
            </th>
            <th
              scope="col"
              class="px-6 py-3">
              <div class="flex items-center">
                Position
                <a href="#"><svg
                  class="w-3 h-3 ms-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                </svg></a>
              </div>
            </th>
            <th
              scope="col"
              class="px-6 py-3">
              Status
            </th>
            <th
              scope="col"
              class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label
                  for="checkbox-table-search-1"
                  class="sr-only">checkbox</label>
              </div>
            </td>
            <td class="w-4 p-4">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
              <img
                class="w-10 h-10 rounded-full"
                src="/image/default/empty-data.svg"
                alt="Jese image">
              <div class="ps-3">
                <div class="text-base font-semibold">
                  Neil Sims
                </div>
                <div class="font-normal text-gray-500">
                  neil.sims@flowbite.com
                </div>
              </div>
            </th>
            <td class="px-6 py-4">
              React Developer
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2" /> Online
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                <a
                  href="#"
                  class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
              </div>
            </td>
          </tr>
          <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label
                  for="checkbox-table-search-2"
                  class="sr-only">checkbox</label>
              </div>
            </td>
            <td class="w-4 p-4">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <img
                class="w-10 h-10 rounded-full"
                src="/image/default/empty-data.svg"
                alt="Jese image">
              <div class="ps-3">
                <div class="text-base font-semibold">
                  Bonnie Green
                </div>
                <div class="font-normal text-gray-500">
                  bonnie@flowbite.com
                </div>
              </div>
            </th>
            <td class="px-6 py-4">
              Designer
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2" /> Online
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                <a
                  href="#"
                  class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
              </div>
            </td>
          </tr>
          <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label
                  for="checkbox-table-search-2"
                  class="sr-only">checkbox</label>
              </div>
            </td>
            <td class="w-4 p-4">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <img
                class="w-10 h-10 rounded-full"
                src="/image/default/empty-data.svg"
                alt="Jese image">
              <div class="ps-3">
                <div class="text-base font-semibold">
                  Jese Leos
                </div>
                <div class="font-normal text-gray-500">
                  jese@flowbite.com
                </div>
              </div>
            </th>
            <td class="px-6 py-4">
              Vue JS Developer
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2" /> Online
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                <a
                  href="#"
                  class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
              </div>
            </td>
          </tr>
          <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label
                  for="checkbox-table-search-2"
                  class="sr-only">checkbox</label>
              </div>
            </td>
            <td class="w-4 p-4">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <img
                class="w-10 h-10 rounded-full"
                src="/image/default/empty-data.svg"
                alt="Jese image">
              <div class="ps-3">
                <div class="text-base font-semibold">
                  Thomas Lean
                </div>
                <div class="font-normal text-gray-500">
                  thomes@flowbite.com
                </div>
              </div>
            </th>
            <td class="px-6 py-4">
              UI/UX Engineer
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2" /> Online
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                <a
                  href="#"
                  class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
              </div>
            </td>
          </tr>

          <Disclosure
            v-slot="{ open }">
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  <label
                    for="checkbox-table-search-3"
                    class="sr-only">checkbox</label>
                </div>
              </td>
              <td class="w-4 p-4">
                <DisclosureButton
                  as="button"
                  :class="[open ? 'rotate-90 text-gray-500' : 'text-gray-400', 'ml-auto h-5 w-5 shrink-0']">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-4">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </DisclosureButton>
              </td>
              <th
                scope="row"
                class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img
                  class="w-10 h-10 rounded-full"
                  src="/image/default/empty-data.svg"
                  alt="Jese image">
                <div class="ps-3">
                  <div class="text-base font-semibold">
                    Leslie Livingston
                  </div>
                  <div class="font-normal text-gray-500">
                    leslie@flowbite.com
                  </div>
                </div>
              </th>
              <td class="px-6 py-4">
                SEO Specialist
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <div class="h-2.5 w-2.5 rounded-full bg-red-500 me-2" /> Offline
                </div>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  <a
                    href="#"
                    class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                </div>
              </td>
            </tr>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95">
              <DisclosurePanel
                as="tr"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td
                  colspan="6"
                  class="p-2">
                  Yes! You can purchase a license that you can share with your entire team.
                </td>
              </DisclosurePanel>
            </transition>
          </Disclosure>

          <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-3"
                  type="checkbox"
                  class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label
                  for="checkbox-table-search-3"
                  class="sr-only">checkbox</label>
              </div>
            </td>
            <td class="w-4 p-4">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <img
                class="w-10 h-10 rounded-full"
                src="/image/default/empty-data.svg"
                alt="Jese image">
              <div class="ps-3">
                <div class="text-base font-semibold">
                  Leslie Livingston
                </div>
                <div class="font-normal text-gray-500">
                  leslie@flowbite.com
                </div>
              </div>
            </th>
            <td class="px-6 py-4">
              SEO Specialist
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full bg-red-500 me-2" /> Offline
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                <a
                  href="#"
                  class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <nav
        class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
        aria-label="Table navigation">
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span class="font-semibold text-gray-900 dark:text-white">1000</span></span>
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              class="flex items-center justify-center px-3 h-8 text-orange-600 border border-gray-300 bg-orange-50 hover:bg-orange-100 hover:text-orange-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">6</a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from '@headlessui/vue'

definePageMeta({
  layout: 'admin',
})

useHead({
  title: 'Users | e-Smart Clinic',
})
</script>

<style></style>
