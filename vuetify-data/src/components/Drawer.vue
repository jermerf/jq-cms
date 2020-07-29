<template>
  <v-navigation-drawer
    app
    src="../assets/cat.jpg"
    v-model="$root.ui.drawer.visible"
    :permanent="$root.ui.drawer.pinned"
  >
    <v-list
      subheader
      two-line
      flat
    >
      <v-list-item>
        <v-list-item-action>
          <v-checkbox v-model="$root.ui.drawer.pinned" />
        </v-list-item-action>
        Pin Drawer
      </v-list-item>
      <v-list-item>
        <v-btn @click="$root.posts.splice(0,1)">Remove Post</v-btn>
      </v-list-item>
      <v-list-item>
        <v-text-field
          v-model="title"
          placeholder="title"
        />
      </v-list-item>

      <v-list-item>
        <v-text-field
          v-model="content"
          placeholder="content"
        />
      </v-list-item>

      <v-list-item>
        <v-btn-toggle
          v-model="icon"
          shaped
          mandatory
        >
          <v-btn
            v-for="(icon, index) in icons"
            :key="index"
            :value="icon"
          >
            <v-icon>{{icon}}</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-list-item>
      <v-list-item>
        <v-btn @click="addPost">Add Post</v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-cat", "mdi-dog", "mdi-newspaper", "mdi-account"],
    title: "New Title",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ea fugiat quo accusantium blanditiis ratione ullam, inventore aliquid! Temporibus aperiam ad eum dignissimos quia, dolor quo reiciendis? Quod, fuga sapiente!",
    icon: "mdi-cat"
  }),
  methods: {
    addPost() {
      this.$root.contentPosts.unshift({
        title: this.title,
        content: this.content,
        icon: this.icon
      })
    }
  }
}
</script>
