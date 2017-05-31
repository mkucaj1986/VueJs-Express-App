<template>
<div>
  <div class="total-product-page">{{getProducts[product].totalPrice}}</div>
</div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    props: ['product'],
    computed: {
      ...mapGetters([
        'getProducts'
      ])
    }
  }
</script>

<style scoped>
.total-product-page{

}
</style>