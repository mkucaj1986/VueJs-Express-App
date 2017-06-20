<template>
  <section>
    <h2>{{title}}</h2>
    <div v-for="item in items">{{item.title}}</div>
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
