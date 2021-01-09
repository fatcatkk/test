import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";

Vue.use(ViewUI);

Vue.config.productionTip = false;

import axios from "axios";
Vue.prototype.$http = axios.create({
  baseURL: "http://127.0.0.1:3000/api"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
