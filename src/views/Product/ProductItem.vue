<template>
  <div>
    <div
      v-if="loader"
      role="status"
      class="space-y-8 h-[100vh] animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
    >
      <div
        class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700"
      >
        <svg
          class="w-12 h-12 text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 640 512"
        >
          <path
            d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"
          />
        </svg>
      </div>
      <div class="w-full">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
      </div>
      <span class="sr-only">Loading...</span>
    </div>

    <div v-else class="flex items-center justify-between">
      <div class="w-[30%]">
        <img
          v-for="(img, index) in item.images"
          :key="index"
          class="w-[80%]"
          :src="img"
          alt="img"
        />
      </div>
      <div class="flex flex-col justify-between w-[70%]">
        <img :src="item?.category?.image" class="w-[80%]" alt="img" />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ item.title }}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {{ item.description }}
        </p>
        <p>{{ item.price }} $</p>
        <button
          @click="
            () => {
              $router.push('/product')
            }
          "
          class="w-[100%] my-5 rounded-sm focus:ring-4 ring-red-200 hover:bg-red-600 bg-red-500 p-4"
        >
          back
        </button>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
import { getProductItem } from '../../server/product'
export default {
  data() {
    return {
      item: {},
      loader: true
    }
  },
  mounted() {
    getProductItem(this.$route.params.id).then((res) => {
      this.item = res.data
      this.loader = false
    })
  }
}
</script>

<style lang="scss" scoped></style>
