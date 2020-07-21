<template>
  <v-card class="ma-12">
    <v-list-item>
      <v-list-item-avatar>
        <v-icon>{{myIcon}}</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{title}}</v-list-item-title>
        <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img
      src="../assets/cat.jpg"
      height="194"
    ></v-img>

    <v-card-text>
      {{content}}
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        icon
        @click="favourited = ! favourited"
      >
        <v-icon>{{favIcon}}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click="$root.ui.dialog.visible = true"
      >
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: "- not set -"
    },
    title: {
      type: String,
      default: "- not set -"
    },
    icon: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    favourited: false,
    icons: ["mdi-cat", "mdi-account", "mdi-dog", "mdi-newspaper"]
  }),
  computed: {
    favIcon() {
      if (this.favourited) {
        return "mdi-heart"
      }
      return "mdi-heart-outline"
    },
    myIcon() {
      return this.icons[this.icon]
    }
  },
  methods: {
    afunc() {

    }
  }
}
</script>
