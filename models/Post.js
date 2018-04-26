const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema; * es2015 destructuring

const postSchema = new Schema({
  title: String,
  text: String,
  _author: { type: Schema.Types.ObjectId, ref: "users" },
  createdDate: { type: Date, default: Date.now },
  _comments: [{ type: Schema.Types.ObjectId, ref: "comments" }]
});

// create a collection in mongoose called 'users' based off of userSchema
module.exports = mongoose.model("posts", postSchema);
