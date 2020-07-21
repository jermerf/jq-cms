<template>
  <v-card class="ma-12">
    <v-list-item>
      <v-list-item-avatar>
        <v-icon>{{post.icon}}</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{post.title}}</v-list-item-title>
        <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img
      src="../assets/cat.jpg"
      height="194"
    ></v-img>

    <v-card-text>
      {{post.content}}
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        icon
        @click="favourited = ! favourited"
      >
        <v-icon>{{post.icon}}</v-icon>
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
    post: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    favourited: false,
  }),
}
</script>
