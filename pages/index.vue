<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      {{title}}
    </h1>
    <div class="col-sm-9">
        <products-list :products="products"></products-list>
    </div>
    <div class="col-sm-3">
        <shopping-cart></shopping-cart>
    </div>
  </section>
</template>

<script>
import axios from '~plugins/axios'
import productsList from '../components/products/productsList'
import shoppingCart from '../components/shop/shoppingCart'
export default {
    async asyncData() {
            let { data } = await axios.get('/api/products')
            return {
                products: data,
                title: 'Sample E Commerce App'
            }
        },
        computed: {

        },
        components: {
            productsList,
            shoppingCart
        },
        methods: {

        },
        head() {
            return {
                title: 'Sample E Commerce App'
            }
        }
}
</script>

<style scoped>

</style>
