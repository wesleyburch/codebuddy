const passport = require("passport"); // require passport npm module

module.exports = app => {
  // send to google login
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      // asking google for profile info, and email. scopes are on google
      scope: ["profile", "email"]
    })
  );

  // redirect after login
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/");
    }
  );

  app.get("/user", (req, res, next) => {
    console.log("===== user!!======");
    console.log(req.users);
    if (req.user) {
      res.send({ user: req.users });
    } else {
      return res.json({ user: null });
    }
  });

  // passport logout
  app.get("/api/logout", (req, res) => {
    req.logout(); //logout function is a passport function
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
