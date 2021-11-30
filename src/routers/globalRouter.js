import express from "express"
import { getLogin, getSignup, home } from "../controllers/globalController.js"
import routes from "../routes.js"

const globalRouter = express.Router()

//home

globalRouter.get(routes.remain,home)
globalRouter.get(routes.login,getLogin)
globalRouter.get(routes.signup,getSignup)


export default globalRouter