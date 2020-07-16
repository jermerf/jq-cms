<template>
  <div>
    <Nav />
    <component :is="$root.currentPage" />
    <!-- <HomePage v-if="$root.currentPage=='home'" />
    <ProductsPage v-if="$root.currentPage=='product'" />
    <ContactPage v-if="$root.currentPage=='contact'" />
    <NewsPage v-if="$root.currentPage=='news'" /> -->
    <MessageBox />
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import MessageBox from './components/MessageBox.vue'
import HomePage from './pages/Home.vue'
import ProductsPage from './pages/Products.vue'
import ContactPage from './pages/Contact.vue'
import NewsPage from './pages/News.vue'

export default {
  components: {
    Nav, MessageBox, HomePage, ProductsPage, ContactPage, NewsPage
  }
}
</script>
