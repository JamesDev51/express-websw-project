import passport from "passport"
import User from "./models/User.js";
import dotenv from "dotenv"
dotenv.config();

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());