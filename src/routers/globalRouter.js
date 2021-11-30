import express from "express"
import { getLogin, getSignup, home, logout, postLogin, postSignup } from "../controllers/globalController.js"
import routes from "../routes.js"

const globalRouter = express.Router()

//home

globalRouter.get(routes.remain,home)

globalRouter.get(routes.login,getLogin)
globalRouter.post(routes.login,postLogin)



globalRouter.get(routes.signup,getSignup)
globalRouter.post(routes.signup,postSignup)

globalRouter.get(routes.logout,logout)

export default globalRouter