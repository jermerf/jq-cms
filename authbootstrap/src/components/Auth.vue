<template>
  <div>
    <b-form>
      <b-form-input
        type="text"
        v-model="email"
      />
      <b-form-input
        type="password"
        v-model="password"
      />
      <b-button @click="register">Register</b-button>
      <b-button @click="login">Login</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
    register() {
      this.$root.firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .catch(err => console.log(err))
    },
    login() {
      this.$root.firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>
</style>
