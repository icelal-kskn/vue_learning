import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ProductsView from "../views/ProductsView.vue";
import ProductsDetailView from "../views/ProductDetailView.vue";
import CartView from "../views/CartView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/products",
    name: "Products",
    component: ProductsView,
  },
  {
    path: "/products/:id",
    name: "ProductDetail",
    component: ProductsDetailView,
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartView,
  },
  {
    path: "/",
    redirect: "/products",
  },
  { path: "/about", redirect: "/cart" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
