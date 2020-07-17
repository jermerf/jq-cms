<template>
  <main id="home">
    <h2>Home</h2>
    <article>
      <h3>This is important cat stuff!</h3>
      <p>Read about the important cat technologies coming to you in the near future!</p>
    </article>
    <NewsArticle :article="promotedArticle" />
    <article>
      <h3>Dogs declare war!</h3>
      <p>President bark has declared was on the cat Supremacy!</p>
    </article>
  </main>
</template>

<script>
import NewsArticle from '../components/NewsArticle.vue'

export default {
  components: { NewsArticle },
  data: () => ({
    promotedArticle: {
      title: "That time I was in the paper in cub scouts",
      description: "When I was 9 I was in the Victoria County Record for something to do with Cub scouts and the Winter",
      urlToImage: "https://jermerf.com/images/mad3.png",
      source: { name: "Jermaine's Memory" }
    }
  })
}
</script>

<style>
</style>
