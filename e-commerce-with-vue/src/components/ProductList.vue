<!-- eslint-disable prettier/prettier -->
<template>
  <div v-if="products.length > 0">
    <ProductsListItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
  <p v-else>You haven't added anything to your cart yet!</p>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import ProductsListItem from "./ProductsListItem.vue";

export default {
  name: "ProductsList",
  props: ["products"],
  components: {
    ProductsListItem,
  },
};
</script>
