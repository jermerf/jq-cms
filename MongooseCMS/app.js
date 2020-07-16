const express = require('express')
const bodyParser = require('body-parser')
const model = require('./model.js')

const PORT = 8080

var app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'))

// Get list of posts
app.get('/posts', async (req, res) => {
  let posts = await model.PostModel.find()
  res.send(posts)
})

// Publish new posts
app.post('/posts', (req, res) => {
  let post = new model.PostModel({
    title: req.body.title,
    content: req.body.content,
    postedOn: new Date()
  })
  post.save()
  res.redirect("/")
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} which is a very nice port`)
})