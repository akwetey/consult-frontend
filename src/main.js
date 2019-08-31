require("./bootstrap");

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./assets/css/style.css";

/* import "./assets/js/menumaker"; */
require("./assets/js/owl.carousel.min.js");
require("./assets/js/custom-carousel");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
