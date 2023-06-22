<template>
  <div class="antialiased bg-gray-50 dark:bg-gray-900">
    <Header />
    <Asside />

    <main class="p-4 md:ml-64 h-auto pt-20">
      <div
        class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 min-h-96 mb-4"
      >
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Asside from '../components/Asside.vue'

export default {
  components: {
    Header,
    Asside
  }
}
</script>

<style lang="scss"></style>
