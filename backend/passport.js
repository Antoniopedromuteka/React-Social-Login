
const passport = require('passport');


const GoogleStrategy = require('passport-google-oauth20').Strategy;




const GOOGLE_CLIENT_ID = "217480429420-ndojgoafin8sr359lbh6sid99221gn0r.apps.googleusercontent.com";

const GOOGLE_CLIENT_SECRET = "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";



passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {

    done(null, profile);


 
  }
));


passport.serializeUser((user, done)=>{
    done(null, user);
})


passport.deserializeUser((user, done)=>{
    done(null, user);
})