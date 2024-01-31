<!-- eslint-disable prettier/prettier -->
<template>
  <div id="page-wrap" v-if="product">
    <div id="image-wrap">
      <img v-bind:src="product.imageUrl" v-bind:alt="product.name" />
    </div>
    <div class="product-details">
      <h1>{{ product.name }}</h1>
      <h3 id="price">${{ product.price }}</h3>
      <p>Average Rating: {{ product.averageRating }}</p>
      <button id="add-to-cart">Add To Cart</button>
      <h4>Description</h4>
      <p>{{ product.description }}</p>
    </div>
  </div>
  <NotFound v-else />
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import  NotFound  from "./NotFoundView";
import { products } from "../fake-data";
export default {
  name: "ProductsDetailView",
  components:{
    NotFound,
  },
  data(){
    return{
      product:products.find((p)=>p.id===this.$route.params.id)
  };
}
}
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
  #page-wrap {
    margin-top: 16px;
    padding: 16px;
    max-width: 600px;
  }

  #img-wrap {
    text-align: center;
  }

  img {
    width: 400px;
  }

  #product-details {
    padding: 16px;
    position: relative;
  }

  #add-to-cart {
    width: 100%;
  }


</style>
