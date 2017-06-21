<template>
  <section class="cartTotalPrice">
	<div class="total-price-title">Total Price: ${{items.totalPrice}}</div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: function () {
      return{
          title: 'cartTotalPrice'
      }
  },
  computed: mapGetters({
    items: 'getShoppingCart'
  })
}
</script>

<style scoped>
.total-price-title{
	font-weight: 700;
}
</style>
