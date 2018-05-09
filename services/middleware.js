var middlewareObj = {};

middlewareObj.isLoggedIn = (req, res, next) => {
  // runs passport middleware to check if user authenticated
  if (req.isAuthenticated()) {
    // move on to next step (whatever is next)
    return next();
  }

  // just gives a way to access it...will access elsewhere in login
  res.send("Error, please Login First!");
  // or redirect to login page
  res.redirect("/auth/google");
};

module.exports = middlewareObj;
