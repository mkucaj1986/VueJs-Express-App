<template>
  <section class="shoping-cart-container">
    <h2>{{title}}</h2>
    <div v-for="(item, index) in items.shoppingCart" class="cart-item-container">
    	<div class="cart-item">
			<div class="cart-item-details cart-item-img">
				<img v-bind:src="`img/${item.img}`" class="img-responsive" alt="Sample App Products" />
			</div>
			<div class="cart-item-details-box">
    			<div class="cart-item-details cart-item-title">{{item.title}}</div>
    			<div class="cart-item-details">Quantity: {{item.qty}}</div>
    			<div class="cart-item-details">Price: ${{item.price}}</div>
    		</div>
    		<div class="cart-item-details-box-delete">
    		<button @click="deleteProduct(item, index)">X</button>
    		</div>
    	</div>
    </div>
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
  }),
     methods: {
         deleteProduct(product, index) {
         	this.$store.dispatch('deleteItem', {product, index});
         }
    }
}
</script>

<style scoped>
.shoping-cart-container{
	height: 400px;
	overflow-y: auto;
}
.cart-item-container{
	border-bottom:1px solid #ccc;
	border-left:1px solid #ccc;
	border-right:1px solid #ccc;
}
.cart-item-container:first-of-type{
	border-top:1px solid #ccc;
}
.cart-item{
	display: inline-block;
	width: 100%;
}
.cart-item-details{
	display: inline-block;
	text-align: left;
	width: 100%;
}
.cart-item-title{
	font-weight: 700;
}
.cart-item-img{
	display: block;
	float: left;
	width: 40%;
}
.cart-item-details-box{
	display: block;
	float: left;
	padding: 0 0 0 5px;
	width: 50%;
}
.cart-item-details-box-delete{
	display: block;
	float: left;
	width: 10%;	
	padding: 20px 10px 0 0;
}
</style>
