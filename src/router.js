import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Index from "./views/Index.vue";
import AboutUs from "./components/AboutUs.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/index/:iso",
      /*   path: "/index/:iso/:page", */
      name: "index",
      component: Index
    },
    {
      path: "/index/:iso/about",
      name: "about",
      component: AboutUs
    }
  ]
});
