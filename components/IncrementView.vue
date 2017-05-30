<template>
<div>
	{{getProducts[product].qty}}
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
.get-count{
	border: 1px solid #000;
	width:20px;
	height:20px;
}
</style>