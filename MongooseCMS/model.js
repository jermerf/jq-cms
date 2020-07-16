const mongoose = require('mongoose')

const DB_URL = 'mongodb://localhost:27017/jqposts'

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  postedOn: Date
})

const PostModel = mongoose.model("Post", PostSchema)

module.exports = {
  PostModel
}