<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      {{title}}
    </h1>
    <ul class="users">
      <li class="user col-xs-6 col-sm-6 col-md-6 col-lg-6" v-for="(product, index) in products" >
        <nuxt-link :to="{ name: 'id', params: { id: index }}">
          <span class="product-title">{{ product.title }}  </span>
          <span class="product-title">{{ product.price }}</span>
          <img v-bind:src="`img/${product.img}`" class="img-responsive" alt="Sample App Products" />
          <span class="product-desc">{{product.description}}</span>
        </nuxt-link>
        <a class="button add-to-cart" v-on:click="addToCart()">
          ADD TO CART
        </a>
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
  methods: {
    addToCart () {
      console.log('click')
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
.add-to-cart{
  cursor:pointer;
  position: absolute;
  bottom:5px;
  right: 0;
  margin: 0 10%;
  left: 0;
  font-size: 12px;
  padding: 10px 0;
  transition: all 0.3s ease 0s;
  width: 80%;
}
.add-to-cart:hover{
  background-color: #000;
  color:#fff;
}
.title
{
  margin: 30px 0;
}
.users
{
  max-width: 768px;
  display: block;
  margin: 0 auto;
  list-style: none;
  padding: 0;
}
.users li{
  border: 2px solid #000;
  padding: 10px 0;
}
.user
{
  position: relative;
  margin: 10px 1%;
  width: 23%;
  min-height: 280px;
}
.product-title{
  width: 100%;
}
.product-desc{
width: 100%;
display: block;
padding: 0;
}
</style>
