<template>
  <div class="get-count">{{getCount}}</div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'getCount'
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