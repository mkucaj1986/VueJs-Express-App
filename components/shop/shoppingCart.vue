<template>
  <section>
    <h2>{{title}}</h2>
    <div v-for="item in items">
    	<span>{{item.title}}</span>
    	<span>  {{item.qty}}</span>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: function () {
      return{
          title: 'Shooping Cart'
      }
  },
  computed: mapGetters({
    items: 'getShoppingCart'
  })
}
</script>

<style scoped>

</style>
