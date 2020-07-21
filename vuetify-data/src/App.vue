<template>
  <v-app>
    <v-main>
      <Toolbar />
      <Drawer />
      <HomePost
        v-for="(p, i) in $root.posts"
        :key="i"
        :post="p"
      />
    </v-main>
    <Popup />
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import Drawer from './components/Drawer.vue'
import HomePost from './components/HomePost.vue'
import Popup from './components/Popup.vue'

export default {
  name: 'App',

  components: {
    Toolbar,
    Drawer,
    HomePost,
    Popup
  },

  data: () => ({
    //
  }),
};
</script>
