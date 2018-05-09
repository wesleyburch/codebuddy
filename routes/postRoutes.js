const mongoose = require("mongoose");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const passport = require("passport");
const middleware = require("../services/middleware.js");

module.exports = app => {
  //New Post
  //middleware.isLoggedIn
  app.post("/api/posts/new", middleware.isLoggedIn, (req, res) => {
    var title = req.body.title;
    var text = req.body.text;
    var author = req.user._id;
    // var newPost = new Post(title, text)
    //   .save()
    var newPost = { title: title, text: text, _author: author };
    Post.create(newPost, (err, newlyCreated) => {
      if (err) {
        console.log(err);
        var redir = { redirect: "/" };
        return res.json(redir);
      } else {
        var redir = { redirect: "/" }; //need to send user a message
        return res.json(redir);
      }
    });
    // .then(item => {
    //   res.json(item);
    //   res.send("item saved to database");
    //   res.redirect("/");
    // })
    // .catch(err => {
    //   res.status(400).send("unable to save to database");
    //   res.redirect("/");
    // });
  });

  // SHOW all posts
  app.get("/api/posts", (req, res) => {
    Post.find({}, function(err, allPosts) {
      if (err) {
        console.log(err);
      } else {
        res.json(allPosts);
      }
    });
    // res.render("campgrounds",{campgrounds: campgrounds});
  });

  // SHOW Current post
  app.get("/api/posts/:id", (req, res) => {
    Post.findById(req.params.id)
      .populate("_comments")
      .exec(function(err, foundPost) {
        if (err) {
          console.log(err);
        } else {
          res.json(foundPost);
        }
      });
  });
};

// Can post to database as of 4-25-18
