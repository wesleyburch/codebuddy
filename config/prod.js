// prod.js - production keys here

// production Google Oath API named "CodeBuddy"
// these values are stored in Heroku config variables - settings

module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY
};
