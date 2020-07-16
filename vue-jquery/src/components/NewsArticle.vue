<template>
  <article class="news">
    <h2>{{article.title}}</h2>
    <h3>{{article.source.name}}</h3>
    <img :src="article.urlToImage">
    <p>{{article.description}}</p>
  </article>
</template>

<script>
export default {
  props: ["article"]
}
</script>

<style>
article.news {
  border: 5px dashed #fab;
}
</style>
