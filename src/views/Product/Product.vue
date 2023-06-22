<template>
  <div v-if="load" class="loading"></div>
  <div class="m-5 flex flex-wrap gap-10 justify-center">
    <Card v-for="item in product" :key="item.id" :data="item" />
  </div>
</template>

<script>
import { getProduct } from '../../server/product.js'
import Card from '../../components/UI/Card.vue'

export default {
  components: { Card },

  data() {
    return {
      product: [],
      load: true
    }
  },

  mounted() {
    getProduct().then((res) => {
      this.product = res.data
      this.load = false
    })
  }
}
</script>

<style lang="scss"></style>
