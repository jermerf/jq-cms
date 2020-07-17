<template>
  <header>
    <UserBox />
    <div>
      <h1>JQuery Basics</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/products">Products</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/news">News</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import UserBox from './UserBox.vue'

export default {
  components: { UserBox }
}
</script>

<style>
header {
  border: 10px solid grey;
  background-color: #444444;
  padding: 2px 10px;
  text-align: center;
}

nav a {
  display: inline-block;
  cursor: pointer;
  padding: 2px 5px;
  margin-right: -6px;
  text-decoration: none;
}

nav a:hover {
  background-color: #777777;
}
</style>
