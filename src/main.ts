import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import './registerServiceWorker';

// Main Sass file
import './assets/sass/main.scss'

// Font awesome icons (4.7)
import 'font-awesome/css/font-awesome.min.css'

// -- BUEFY --
// Vue JS Components for Bulma
import Buefy from 'buefy'
Vue.use(Buefy, {
    defaultIconPack: 'fas', // Maybe change to fas (new one)
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
