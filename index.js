const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/User");
require("./models/Post");
require("./models/Comment"); // be aware of the order of requires...
require("./services/passport"); // ...re-arrange these two to see

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    //cookie-session api: https://www.npmjs.com/package/cookie-session
    maxAge: 30 * 24 * 60 * 60 * 1000, //30 days before cookie expires
    keys: [keys.cookieKey] //used to imprint cookie and encrypt (from keys.js)
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/postRoutes")(app);
require("./routes/commentRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server started");
});
