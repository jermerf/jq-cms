import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

window.app = new Vue({
  render: h => h(App),
  data: {
    user: {
      name: "Jermionee Granger",
      friends: [
        {
          name: "Tesla Yin",
          thumb_url: "/thumbs/456kj3434gr",
          relatedContacts: [
            {
              name: "Edison Yang",
              thumb_url: "/thumbs/d6k5j3754gr"
            },
            {
              name: "That Bear",
              thumb_url: "/thumbs/d6k45j3df754gr"
            }
          ]
        },
        {
          name: "Edison Yang",
          thumb_url: "/thumbs/d6k5j3754gr"
        },
        {
          name: "That Bear",
          thumb_url: "/thumbs/d6k45j3df754gr"
        }
      ],
    },
    ui: {
      showSidebar: true
    },
    post: {
      header: {
        title: "Fundraiser",
        info_url: "/posts/k3j4543nb0NJK"
      },
      cached_posts: []
    }
  }
}).$mount('#app')
