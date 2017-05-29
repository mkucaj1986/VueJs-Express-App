<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      {{title}}
    </h1>
    <ul class="users">
      <li v-for="(product, index) in products" class="user">
        <nuxt-link :to="{ name: 'id', params: { id: index }}">
          {{ product.title }}
          <img v-bind:src="`img/${product.img}`" class="img-responsive" alt="Sample App Products" />
          <span class="product-desc">{{product.description}}</span>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from '~plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/products')
    return {
      products: data,
      title: 'Sample E Commerce App'
    }
  },
  head () {
    return {
      title: 'Sample E Commerce App'
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
