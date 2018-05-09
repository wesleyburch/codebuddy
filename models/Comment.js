const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema; * es2015 destructuring
const User = require("./User");

const commentSchema = new Schema({
  text: String,
  _author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

// create a collection in mongoose called 'users' based off of userSchema
module.exports = mongoose.model("Comment", commentSchema);
