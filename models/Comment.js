const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema; * es2015 destructuring

const commentSchema = new Schema({
  title: String,
  text: String,
  _author: {
    type: Schema.Types.ObjectId,
    ref: "users"
  }
});

// create a collection in mongoose called 'users' based off of userSchema
mongoose.model("comments", commentSchema);
