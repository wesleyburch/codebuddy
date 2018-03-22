const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema; * es2015 destructuring

const commentSchema = new Schema({
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
  text: String
});

// create a collection in mongoose called 'users' based off of userSchema
mongoose.model("comments", commentSchema);
