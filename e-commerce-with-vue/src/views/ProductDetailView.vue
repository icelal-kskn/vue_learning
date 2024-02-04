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
import axios from 'axios';
import NotFound from './NotFoundView';

export default {
    name: 'ProductDetailPage',
    components: {
      NotFound,
    },
    data() {
      return {
        product: {},
        cartItems: [],
        showSuccessMessage: false,
      };
    },
    computed: {
      itemIsInCart() {
        return this.cartItems.some(item => item.id === this.product.id);
      }
    },
    methods: {
      async addToCart() {
        const userId=1234;
        await axios.post(`/api/users/${userId}/cart`, {
          productId: this.$route.params.id,
        });
        this.showSuccessMessage = true;
        setTimeout(() => {
          this.$router.push('/products');
        }, 1500);
      },
    },
    async created() {
      const userId=1234;
      const { data: product } = await axios.get(`/api/products/${this.$route.params.id}`);
      this.product = product;

      const { data: cartItems } = await axios.get(`/api/users/${userId}/cart`);
      this.cartItems = cartItems;
    }
};
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
