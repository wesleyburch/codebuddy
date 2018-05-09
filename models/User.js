const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema; * es2015 destructuring
const Post = require("./Post");

const userSchema = new Schema({
  googleID: String,
  googleUserFull: String,
  googleUserFirst: String
});

// create a collection in mongoose called 'users' based off of userSchema
module.exports = mongoose.model("User", userSchema);
