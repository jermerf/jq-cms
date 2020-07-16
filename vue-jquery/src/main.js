import Vue from 'vue';
import App from './App.vue';
import './assets/main.scss'

Vue.config.productionTip = false;

window.app = new Vue({
  render: (h) => h(App),
  data: {
    currentPage: "HomePage"
  }
}).$mount('#app');
