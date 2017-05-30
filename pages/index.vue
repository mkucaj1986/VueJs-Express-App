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
        <a class="button add-to-cart main-action-btn" @click="addToCart(product)">
          ADD TO CART
        </a>
        <span class="qty-btn increment-qty main-action-btn" @click="increment">+</span>
        <span class="qty-btn decrement-qty main-action-btn" @click="decrement">-</span>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from '~plugins/axios'

export default {
    async asyncData() {
            let { data } = await axios.get('/api/products')
            return {
                products: data,
                title: 'Sample E Commerce App'
            }
        },
        methods: {
            addToCart() {
                console.log('click')
            },
            increment() {
                this.$store.dispatch('increment', 1)
            },
            decrement() {
                this.$store.dispatch('decrement', 1)
            }
        },
        head() {
            return {
                title: 'Sample E Commerce App'
            }
        }
}
</script>

<style scoped>
.main-action-btn{
  transition: all 0.3s ease 0s;
}
.main-action-btn:hover{
  background-color: #000;
  color:#fff;
}
.add-to-cart{
  cursor:pointer;
  position: absolute;
  bottom:5px;
  right: 0;
  margin: 0 10%;
  left: 0;
  font-size: 12px;
  padding: 10px 0;
  width: 80%;
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
.qty-btn{
  cursor:pointer;
  padding: 5px 10px;
  border: 1px solid #000;
  position: absolute;
  bottom: -45px;
}
.increment-qty{
  right:15px;
}
.decrement-qty{
  left:15px;
}
</style>
