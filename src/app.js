console.clear()
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
import flash from "express-flash"
import { localMiddleware } from "./middlewares.js"


//dotenv
import dotenv from "dotenv"
dotenv.config()

//routers
import routes from "./routes.js"
import globalRouter from "./routers/globalRouter.js"
import adminRouter from "./routers/adminRouter.js"
import programRouter from "./routers/programRouter.js"
import apiRouter from "./routers/apiRouter.js"


const app = express()

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.set("view engine","pug")
app.set("views",path.join(__dirname,"/views"))
app.use("/static",express.static(__dirname+"/static"))
app.use("/img",express.static(path.join(__dirname,"/img")))
app.use(cookieParser())
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));
app.use(helmet({contentSecurityPolicy:false}));
app.use(compression())
app.use(morgan("dev"))
// app.use(flash())

// app.use(localMiddleware)


app.use(routes.home, globalRouter)
app.use(routes.admin, adminRouter)
app.use(routes.programs, programRouter)
app.use(routes.api, apiRouter)
export default app