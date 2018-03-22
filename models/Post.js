const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema; * es2015 destructuring

const postSchema = new Schema({
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
    },
    username: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
    }
  },
  title: String,
  language: String,
  text: String,
  location: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comments"
    }
  ]
});

// create a collection in mongoose called 'users' based off of userSchema
mongoose.model("posts", postSchema);
