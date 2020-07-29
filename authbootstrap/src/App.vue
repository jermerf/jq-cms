<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <div class="container">
      <div class="image">
        <img src="./assets/logo.png" />
        <h3>Panda Plant</h3>
        <h3>$ 8.00</h3>
        <button class="btn btn-d">Add</button>
      </div>
      <div class="image">
        <img src="./assets/logo.png" />
        <h3>Panda Plant</h3>
        <h3>$ 8.00</h3>
        <button class="btn btn-d">Add</button>
      </div>
      <div class="image">
        <img src="./assets/logo.png" />
        <h3>Panda Plant</h3>
        <h3>$ 8.00</h3>
        <button class="btn btn-d">Add</button>
      </div>
      <div class="image">
        <img src="./assets/logo.png" />
        <h3>Panda Plant</h3>
        <h3>$ 8.00</h3>
        <button class="btn btn-d">Add</button>
      </div>
      <div class="image">
        <img src="./assets/logo.png" />
        <h3>Panda Plant</h3>
        <h3>$ 8.00</h3>
        <button class="btn btn-d">Add</button>
      </div>
      <div class="image">
        <img src="./assets/logo.png" />
        <h3>Panda Plant</h3>
        <h3>$ 8.00</h3>
        <button class="btn btn-d">Add</button>
      </div>
      <div class="image">
        <img src="./assets/logo.png" />
        <h3>Panda Plant</h3>
        <h3>$ 8.00</h3>
        <button class="btn btn-d">Add</button>
      </div>
      <div class="image">
        <img src="./assets/logo.png" />
        <h3>Panda Plant</h3>
        <h3>$ 8.00</h3>
        <button class="btn btn-d">Add</button>
      </div>
    </div>
    <b-container>
      <Auth />
    </b-container>
  </div>
</template>

<script>
import Auth from './components/Auth.vue';

export default {
  name: 'App',
  components: {
    Auth,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
