import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import investorPage from "../views/investorPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/investor",
    name: "investor",
    component: investorPage,
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

export const router = new VueRouter({
  routes,
  mode: "history",
});
