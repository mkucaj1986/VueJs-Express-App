<template>
<div>
  <div class="total-product-page">Total Price: ${{getProducts[product].totalPrice}}</div>
  <span class="out-of-stock" v-if="getProducts[product].outOfStock">Out of stock</span>
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
  float: left;
  margin: 0 auto;
  display: block;
  width: 100%;
  padding: 0 0 0 15px;
  position: relative;
  top: 30px;
  text-align: left;
}
.out-of-stock{
  color: red;
  top: 55px;
  position: relative;
}
</style>