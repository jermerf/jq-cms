export default {
  state() {
    let data = {
      users: [],
      posts: []
    }
    if (localStorage['fakeServerData']) {
      data = JSON.parse(localStorage['fakeServerData'])
    }
    return data
  },
  saveState(state) {
    localStorage['fakeServerData'] = JSON.stringify(state)
  },
  register() {
    let data = this.state()
  },
  login() {

  },
  addPost() {

  },
  getPosts() {

  },

}