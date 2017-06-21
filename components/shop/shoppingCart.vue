<template>
  <section>
    <h2>{{title}}</h2>
    <div v-for="item in items">
    	<div class="cart-item">
			<div class="cart-item-details cart-item-img">
				<img v-bind:src="`img/${item.img}`" class="img-responsive" alt="Sample App Products" />
			</div>
			<div class="cart-item-details-box">
    			<div class="cart-item-details cart-item-title">{{item.title}}</div>
    			<div class="cart-item-details">Quantity: {{item.qty}}</div>
    			<div class="cart-item-details">Price: {{item.price}}</div>
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
  })
}
</script>

<style scoped>
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
	width: 60%;
}
</style>
