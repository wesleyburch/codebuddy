const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema; * es2015 destructuring

const postSchema = new Schema({
  title: String,
  text: String,
  author: { type: Schema.Types.ObjectId, ref: "users" },
  createdDate: { type: Date, default: Date.now },
  comments: [{ type: Schema.Types.ObjectId, ref: "comments" }]
});

// create a collection in mongoose called 'users' based off of userSchema
mongoose.model("posts", postSchema);
