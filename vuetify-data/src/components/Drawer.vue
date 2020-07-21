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
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
  })
}
</script>
