const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema; * es2015 destructuring

const userSchema = new Schema({
  googleID: String,
  googleUserFull: String,
  googleUserFirst: String,
  posts: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "posts"
  }
});

// create a collection in mongoose called 'users' based off of userSchema
mongoose.model("users", userSchema);
