<template>
  <header>
    <h1>JQuery Basics</h1>
    <ul>
      <li @click="goTo('HomePage')">Home</li>
      <li @click="goTo('ProductsPage')">Products</li>
      <li @click="goTo('ContactPage')">Contact</li>
      <li @click="goTo('NewsPage')">News</li>
    </ul>
  </header>
</template>

<script>
export default {
  methods: {
    goTo(page) {
      this.$root.currentPage = page
    }
  }
}
</script>

<style lang="scss">
header {
  border: 10px solid grey;
  background-color: #444444;
  padding: 2px 10px;
  text-align: center;

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    cursor: pointer;
    padding: 2px 5px;
    margin-right: -6px;
  }

  li:hover {
    background-color: #777777;
  }
}
</style>
