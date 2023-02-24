import {createRouter, createWebHistory} from "vue-router";
import Login from "../views/SignIn.vue";
import MainPage from "../views/MainPage.vue";
import CreateProduct from "../views/CreateProduct.vue";
import EditProduct from "../views/EditProduct.vue";

const routes = [
  {
    name: "Login",
    path: "/",
    component: Login,
    meta: {title: "Login - Orbital"}
  },
  {
    name: "MainPage",
    path: "/dashboard",
    component: MainPage,
    meta: {title: "Dashboard - Orbital"}
  },
  {
    name: "CreateProduct",
    path: "/product",
    component: CreateProduct,
    meta: {title: "Cadastro de produto - Orbital"}
  },
  {
    name: "EditProduct",
    path: "/product/edit/:id",
    component: EditProduct,
    meta: {title: "Edição produto - Orbital"}
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
