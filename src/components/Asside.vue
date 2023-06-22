<template>
  <aside
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidenav"
    id="drawer-navigation"
  >
    <div class="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
      <ul class="space-y-2">
        <li v-for="item in linkd" :key="item.id" class="">
          <routerLink
            :to="item.link"
            class="flex items-center p-2 text-base hover:text-gray-800 font-medium text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <i class="text-[24px]" :class="item.icon"></i>
            <span class="ml-3">{{ item.title }}</span>
          </routerLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { links } from '../Constants/sideLinks.js'
export default {
  data() {
    return {
      linkd: links
    }
  }
}
</script>

<style lang="scss" scoped></style>
