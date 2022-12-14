import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
// lazy-loaded
const BoardSupplier = () => import("./components/BoardSupplier")
const BoardCustomer = () => import("./components/BoardCustomer.vue")
const ProductForm = () => import("./components/ProductForm.vue")

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/supplier",
    name: "supplier",
    component: BoardSupplier,
  },
  {
    path: "/customer",
    name: "customer",
    component: BoardCustomer,
  },
  {
    path: "/newProduct",
    name: "newProduct",
    component: ProductForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register', '/home'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });

export default router;