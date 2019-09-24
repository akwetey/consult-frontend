import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Index from "./views/Index.vue";
import About from "./views/About.vue";
import ContactUs from "./views/ContactUs.vue";
import Services from "./views/Services.vue";
import NotFound from "./components/NotFound.vue";

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
      name: "index",
      component: Index
    },
    {
      path: "/index/:iso/about-us",
      name: "about",
      component: About
    },
    {
      path: "/index/:iso/contact-us",
      name: "contactus",
      component: ContactUs
    },
    {
      path: "/index/:iso/services",
      name: "services",
      component: Services
    },
    {
      path: "*",
      name: "notfound",
      component: NotFound
    }
  ]
});
