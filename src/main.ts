import Vue from 'vue';
import App from './App.vue';
import router from './routing/router'
import store from './vuex/store'
// import './registerServiceWorker';

// Main Sass file
import './assets/sass/main.scss'

// Font awesome icons (4.7)
import 'font-awesome/css/font-awesome.min.css'

// Import Axios for all network requests
import axios, { AxiosResponse } from "axios";

// -- BUEFY --
// Vue JS Components for Bulma
import Buefy from 'buefy'
Vue.use(Buefy, {
    defaultIconPack: 'fas', // Maybe change to fas (new one)
})

// Fetch the token
let token = localStorage.getItem("api_token");

// If the token exist, set it in the authorization
if (token) {
    // Axios configuration
    axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
    axios.defaults.headers.common["Authorization"] = "Bearer ".concat(token);
}
// Define the base api url
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

// Define the base api url
Vue.prototype.BACKEND_BASE_URL = process.env.VUE_APP_BACKEND_BASE_URL;
Vue.prototype.APP_BASE_URL = process.env.VUE_APP_BASE_URL;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
