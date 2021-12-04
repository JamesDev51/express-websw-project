import passport from "passport"
import User from "./models/User.js";
import dotenv from "dotenv"
dotenv.config();


passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser(),function(user,done){
    console.log("user: ",user)

});
passport.deserializeUser(User.deserializeUser(),function(user,done){
    console.log("user: ",user)

});