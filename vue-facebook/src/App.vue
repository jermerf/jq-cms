<template>
  <div>
    <header>
      <button @click="$root.ui.showSidebar = !$root.ui.showSidebar">&larr;</button>
      <nav>
        <span>Home</span>
        <span>Videos</span>
        <span>etc</span>
      </nav>
      <div id="username">{{$root.user.name}}</div>
    </header>
    <aside v-if="$root.ui.showSidebar">
      Some words
    </aside>

    <aside
      id="right"
      v-if="$root.ui.showSidebar"
    >
      <h2>Friends</h2>
      <div
        class="friend"
        v-for="(f, i) in $root.user.friends"
        :key="i"
      >
        <h3>{{f.name}}</h3>
        {{f.thumb_url}}
        <div
          class="related"
          v-for="(c, i) in f.relatedContacts"
          :key="i"
        >
          related: {{c.name}}
        </div>
      </div>
    </aside>
    <main>
      <div
        v-if="$root.post.header"
        id="headerpost"
      >
        <h1>{{$root.post.header.title}}</h1>
        {{$root.post.header.info_url}}
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  methods: {
    toggleSidebar() {
      this.$root.ui.showSidebar = !this.$root.ui.showSidebar
    },
  }
}
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #eee;
}
body {
  margin: 0;
}
header,
aside,
main {
  padding: 5px 10px;
  background-color: #333;
  overflow: hidden;
}
header > * {
  display: inline-block;
}
aside {
  position: absolute;
  width: 250px;
  height: calc(100% - 2em + 4px);
  top: calc(2em - 4px);
  box-sizing: border-box;
}
div.related {
  margin-left: 10px;
}
aside#right {
  right: 0;
}
button {
  background-color: #555;
}
#username {
  float: right;
}
nav span {
  padding: 10px 15px;
}
main {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
