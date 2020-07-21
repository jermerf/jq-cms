<template>
  <v-dialog v-model="$root.ui.dialog.visible">
    <v-card>
      <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline">The popup</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-card-text>
        {{$root.ui.dialog.message}}
      </v-card-text>
      <v-card-actions>
        <v-btn @click="$root.ui.dialog.visible = false">close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {

}
</script>
