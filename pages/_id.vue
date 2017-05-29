<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      Product Page
    </h1>
    <h2 class="info">
      {{ product.title }}
      {{ product.price }}
      <img v-bind:src="`img/${product.img}`" class="img-responsive" alt="Sample App Products" />
      {{product.description}}
    </h2>
    <nuxt-link class="button" to="/">
      HOME
    </nuxt-link>
  </section>
</template>

<script>
import axios from '~plugins/axios'

export default {
  name: 'id',
  asyncData ({ params, error }) {
    return axios.get('/api/products/' + params.id)
    .then((res) => {
      return { product: res.data }
    })
    .catch((e) => {
      error({ statusCode: 404, message: 'User not found' })
    })
  },
  head () {
    return {
      title: `User: ${this.product.title}`
    }
  }
}
</script>

<style scoped>
.title
{
  margin-top: 30px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 30px;
}
</style>
