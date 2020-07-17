<template>
  <aside>
    <div v-if="$store.state.user.loggedIn">
      You are logged in
    </div>
    <div v-else>
      <input
        placeholder="username"
        v-model="username"
      /><br>
      <input
        placeholder="password"
        v-model="password"
      /><br>
      <button>Login</button>
    </div>
  </aside>
</template>

<script>
export default {
  data: () => ({
  }),
  computed: {
    username: {
      get() { return this.$store.state.ui.username },
      set(val) { this.$store.commit('setUiUsername', val) }
    },
    password: {
      get() { return this.$store.state.ui.password },
      set(val) { this.$store.commit('setUiPassword', val) }
    }
  },
  methods: {

  }
}
</script>

<style>
aside {
  float: right;
  width: 200px;
  min-height: 6em;
}
</style>
