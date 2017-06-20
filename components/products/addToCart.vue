<template>
  <a class="button add-to-cart main-action-btn" @click="addToCart(product)">
    ADD TO CART
  </a>
</template>

<script>
import IncrementView from '../IncrementView'
import totalPriceComp from '../totalPriceComp'
import { mapGetters } from 'vuex'
export default {
     props: ['product', 'qty'],
     computed: {
       ...mapGetters([
         'getShoppingCart'
       ])
     },
     methods: {
         addToCart(product) {
            if(parseInt(this.qty) > 0){
             this.$store.dispatch('addToCart', product);
            }
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
  background-color: #07d207;
  cursor:pointer;
  position: relative;
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
.products
{
  max-width: 768px;
  display: block;
  margin: 0 auto;
  list-style: none;
  padding: 0;
}
.products li{
  border: 2px solid #000;
  padding: 10px 0;
}
.product
{
  position: relative;
  margin: 10px 1%;
  width: 23%;
  min-height: 340px;
}
.product-title{
  width: 100%;
}
.product-desc{
width: 100%;
display: block;
padding: 0;
}
.qty-btn:disabled{
    background-color: #ccc;
    color:#ccc;
}
.qty-btn{
  background-color: #fff;
  cursor:pointer;
  padding: 5px 10px;
  border: 1px solid #000;
  position: absolute;
  top: 5px;
}
.increment-qty{
  float: right;
  right:10px;
}
.decrement-qty{
  float: left;
  left:10px;
}
.quantity{
  border:1px solid #000;
  display: block;
  top: 10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  position: relative;
  text-align: center;
  width: 30px;
}
img{
  max-height: 134px;
  margin: 0 auto;
}
.product-controls{
  display: inline-block;
  width: 100%;
  padding: 15px 0 0 0;
  position: relative;
  top: 0;
}
.incre-decre-ctrls{
    display: inline-block;
    position: relative;
    float: left;
    width: 100%;
}
</style>
