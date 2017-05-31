<template>
<div>
	<input type="text" v-on:keyup="changeQty($event, product)" v-model="getProducts[product].qty" />
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
    },
    methods: {
            changeQty(event, product) {
              this.$store.dispatch('totalPrice', product);
              this.$store.dispatch('checkStore', product);
            }
        }
  }
</script>

<style scoped>
.get-count{
	border: 1px solid #000;
	width:20px;
	height:20px;
}
input{
  width: 25px;
  border: 0;
  outline: 0;
  text-align: right;
  padding: 0 3px 0 0;
}
</style>