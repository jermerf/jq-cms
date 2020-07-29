import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

window.app = new Vue({
  vuetify,
  render: (h) => h(App),
  // Central source of data
  data: {
    ui: {
      drawer: {
        visible: true,
        pinned: false
      },
      dialog: {
        visible: false,
        message: "- not set - "
      }
    },
    contentPosts: [
      { title: 'Cat', content: 'Some words', icon: 'mdi-cat' },
      { title: 'Dog', content: 'Some words', icon: 'mdi-dog' },
      { title: 'News', content: 'Some words', icon: 'mdi-newspaper' },
      { title: 'Account', content: 'Some words', icon: 'mdi-account' },
    ]
  }
}).$mount('#app');
