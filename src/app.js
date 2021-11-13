console.clear()
import express from "express"
//middlewares
import morgan from "morgan" //logger
import helmet from "helmet" //security
import compression from "compression" //compression
import cookieParser from "cookie-parser" //cookie-parser
import path from "path" //path
import mongoose from "mongoose" //db
import session  from "express-session"
import MongoStore from "connect-mongo"
import passport from "passport"
import flash from "express-flash"
import { localMiddleware } from "./middlewares.js"

//dotenv
import dotenv from "dotenv"
dotenv.config()

const __dirname = path.resolve()
const app = express()

app.set("view engine","pug")
app.set("views",path.join(__dirname,"views"))
app.use("/static",express.static(__dirname+"/static"))
app.use("/img",express.static(path.join(__dirname,"/img")))
app.use(cookieParser())
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));
app.use(compression())
app.use(morgan("dev"))
app.use(flash())
app.use(localMiddleware)

export default app