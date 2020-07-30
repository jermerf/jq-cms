const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  email: mongoose.SchemaTypes.email,
  friends: [User],
  posts: [Post]
})

const PostSchema = new mongoose.Schema({
  content: String,
  media: [MediaFile]
})

const MediaFileSchema = new mongoose.Schema({
  fname: String, // cindy.jpg
  // resource_url: String // https://fbase.resfbase/3242-d34iujnefkg 
  storedName: String, // /app/uploads/745h3i58n453o83j4t
})

const User = mongoose.model("User", UserSchema)
const Post = mongoose.model("Post", PostSchema)
const MediaFile = mongoose.model("MediaFile", MediaFileSchema)

app.get('/friends', (res, res) => {
  User.find({
    $eq: { _id: req.session.uid }
  })
})