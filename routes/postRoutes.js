const mongoose = require("mongoose");
var Post = require("../models/Post");

module.exports = app => {
  app.post("/posts/new", (req, res) => {
    res.json({
      response:
        "Your post route can be reached and pass variables..now store them",
      body: {
        title: req.body.title,
        text: req.body.text
      }
    });
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

//not working. Can't post to database yet. -Wesley
// React form needs to "POST" to port 5000 or dev server, not front end server
