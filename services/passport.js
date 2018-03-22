const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users"); // from our User.js model

// adding user into cookie.  we don't expect errors so, null
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// pulling cookie out turning back into user
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback", //relative callback URL
      proxy: true // allows use of proxy which is for our heroku deployment in this case
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({
        googleID: profile.id
      }); // returns a promise

      if (existingUser) {
        // we already have a user with this profile.id
        // done (err, user_record), no err here because we found user here so..
        return done(null, existingUser);
      }

      // we don't have this user. save to our user db
      const user = await new User({
        googleID: profile.id,
        googleUserFull: profile.displayName,
        googleUserFirst: profile.name.givenName
      }).save();
      return done(null, user);
    }
  )
);
