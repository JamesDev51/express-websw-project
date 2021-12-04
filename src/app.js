import express from "express"
//middlewares
import morgan from "morgan" //logger
import helmet from "helmet" //security
import compression from "compression" //compression
import cookieParser from "cookie-parser" //cookie-parser
import path from "path" //path
import url from 'url';
import mongoose from "mongoose" //db
import session  from "express-session"
import MongoStore from "connect-mongo"
import passport from "passport"
import "./passport"
import flash from "express-flash"
import { localMiddleware } from "./middlewares"


//dotenv
import dotenv from "dotenv"
dotenv.config()

//routers
import routes from "./routes"
import globalRouter from "./routers/globalRouter"
import adminRouter from "./routers/adminRouter"
import programRouter from "./routers/programRouter"
import apiRouter from "./routers/apiRouter"


const app = express()
const CookieStore = new MongoStore(session)

// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


app.set("view engine","pug")
app.set("views",path.join(__dirname,"/views"))
app.use("/static",express.static(__dirname+"/static"))
app.use("/img",express.static(path.join(__dirname,"/img")))
app.use(cookieParser())
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
app.use(helmet({contentSecurityPolicy:false}));
app.use(compression())
app.use(morgan("dev"))
app.use(session({
    secret:process.env.COOKIE_SECRET,
    resave:false,
    saveUninitialized:false,
    store: new CookieStore({mongooseConnection:mongoose.connection})
}))
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())

app.use(localMiddleware)


app.use(routes.home, globalRouter)
app.use(routes.admin, adminRouter)
app.use(routes.programs, programRouter)
app.use(routes.api, apiRouter)
export default app