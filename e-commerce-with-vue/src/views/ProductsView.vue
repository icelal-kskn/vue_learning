<!-- eslint-disable prettier/prettier -->
<template>
  <div id="page-wrap">
    <ProductsGrid :products="products" />
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import axios from "axios";
import ProductsGrid from '../components/ProductsGrid.vue';

export default {
    name: 'ProductsView',
    components: {
      ProductsGrid,
    },
    data() {
      return {
        products: [] ,
      };
    },
    async created(){
      const result= await axios.get('http://localhost:8000/api/products');
      this.products= result.data;
    },
};
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.grid-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
}

.product-item {
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 2px 5px #888;
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
  padding: 20px;
  position: relative;
  width: 32%;
}

.product-name {
  margin-bottom: 0;
}

img {
  height: 200px;
  width: 200px;
}

a {
  width: 100%;
}

button {
  width: 100%;
}
</style>
