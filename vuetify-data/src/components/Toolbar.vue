<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <div class="d-flex align-center">
      <v-btn
        v-if="!$root.ui.drawer.pinned"
        icon
        @click="toggleDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <h1>
        Data App
      </h1>
    </div>

    <v-spacer></v-spacer>

  </v-app-bar>
</template>

<script>
export default {
  methods: {
    toggleDrawer() {
      this.$root.ui.drawer.visible = !this.$root.ui.drawer.visible
    }
  }
}
</script>
