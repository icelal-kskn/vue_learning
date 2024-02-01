<!-- eslint-disable prettier/prettier -->
<template>
  <div class="grid-wrap">
    <ProductsGridItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import ProductsGridItem from "./ProductsGridItem.vue";

export default {
  name: "ProductsGrid",
  props: ["products"],
  components: {
    ProductsGridItem,
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
</style>
