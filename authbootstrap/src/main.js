import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import * as firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

const firebaseConfig = {
  apiKey: "AIzaSyC0Q6_nmIcbNYNyAGMGHtY3IrrC1wPNWkk",
  authDomain: "classauth-837dc.firebaseapp.com",
  databaseURL: "https://classauth-837dc.firebaseio.com",
  projectId: "classauth-837dc",
  storageBucket: "classauth-837dc.appspot.com",
  messagingSenderId: "92349146248",
  appId: "1:92349146248:web:6df87a01d1e310cb2beb3d",
  measurementId: "G-XVXBTRT3LB"
};

firebase.initializeApp(firebaseConfig)

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

window.app = new Vue({
  render: (h) => h(App),
  data: {
    loggedIn: false,
    firebase
  }
}).$mount('#app');
