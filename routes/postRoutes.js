const mongoose = require("mongoose");
const Post = mongoose.model("posts");

//New Post
module.exports = app => {
  app.post("/posts/new", (req, res) => {
    var newPost = new Post(req.body);
    newPost
      .save()
      .then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
    // res.json({
    //   response:
    //     "Your post route can be reached and pass variables..now store them",
    //   body: {
    //     title: req.body.title,
    //     text: req.body.text,
    //     _author: req.body._author
    //   }
    // });
  });
};

//var newPost = new Post({text: req.body.text, title: req.body.title});
// Create new user. Hashes and stores password too
// User.register(newUser, req.body.password, function(err, user){
// if(err){
//console.log(err);
//return res.render("register", {error: err.message});
//}
//passport.authenticate("local")(req, res, function(){
//req.flash("success", "Welcome " + user.username + "!");
//res.redirect("/campgrounds");
//});
//});

// Can post to database as of 4-25-18
