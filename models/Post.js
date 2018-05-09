const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema; * es2015 destructuring
const User = require("./User");
const Comment = require("./Comment");

const postSchema = new Schema({
  title: String,
  text: String,
  _author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  createdDate: { type: Date, default: Date.now },
  _comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }]
});

// create a collection in mongoose called 'users' based off of userSchema
module.exports = mongoose.model("Post", postSchema);

// add googleID to _author for searching user
