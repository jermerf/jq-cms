<template>
  <main id="news">
    <NewsArticle
      v-for="(a, i) in articles"
      :key="i"
      :article="a"
    />
  </main>
</template>

<script>
import jQuery from 'jquery'
import NewsArticle from '../components/NewsArticle.vue'

const $ = jQuery

const NEWS_URL = 'https://newsapi.org/v2/top-headlines?country=ca&apiKey=8ab4d331a0784eb18325e0a4b77ba076'

export default {
  components: { NewsArticle },
  data: () => ({
    articles: []
  }),
  methods: {
    refreshNews() {
      $.get(NEWS_URL, res => {
        this.articles = res.articles
      })
    }
  },
  mounted() {
    this.refreshNews()
  }
}
</script>

<style>
article {
  margin: 5px;
  padding: 10px;
  background-color: #333333;
}
img {
  max-height: 200px;
}
</style>
