const mongoose = require("mongoose");
const Comment = require("../models/Comment");
const Post = require("../models/Post");
const middleware = require("../services/middleware.js");

// Post new Comment
module.exports = app => {
  app.post("/api/posts/:id/comment", middleware.isLoggedIn, (req, res) => {
    res.send("post route works");
    var postID = req.body.url;
    var text = req.body.text;
    var author = req.user._id;

    var newComment = { text: text, _author: author };
    console.log(newComment);
    Comment.create(newComment, (err, newlyCreated) => {
      if (err) {
        console.log(err);
      } else {
        newlyCreated.save().catch(err => console.log(err));
        console.log("newlycreated comment object: " + newlyCreated);
        Post.findById(
          req.params.id,
          // { _id: postID },
          // { $push: { _comments: newlyCreated } },
          async function(err, foundPost) {
            if (err) {
              // res.status(500);
              console.log(err);
            }
            try {
              foundPost._comments.push(newlyCreated._id);
              foundPost.save();
              console.log("found post " + foundPost);
            } catch (err) {
              console.log(err);
              // res.status(200);
            }
          }
        );
      }
      // if (err) {
      //   res.json(err);
      //   console.log(err);
      //   // var redir = { redirect: "/" };
      //   // return res.json(redir);
      // } else {
      //   console.log();
      // }

      //  var newComment = new Comment(req.body);
      //   newComment
      //     .save()
      //     .then(item => {
      //       res.send("item saved to database");
      //     })
      //     .catch(err => {
      //       res.status(400).send("unable to save to database");
      //     });
    });
  });

  /*
  Show all comments for Post
  */
  // app.get("/api/posts/:id", (req, res) => {
  //   Post.findById(req.params._id)
  //     .populate("comments")
  //     .exec(function(err, foundPost) {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         res.json(allPosts);
  //       }
  //     });
  // });
};
