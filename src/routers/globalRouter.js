import express from "express"
import { getLogin, getSignup, home, logout, postLogin, postSignup } from "../controllers/globalController.js"
import routes from "../routes.js"
import { onlyPublic, onlyPrivate } from "../middlewares.js"

const globalRouter = express.Router()

//home

globalRouter.get(routes.remain,home)

globalRouter.get(routes.login,onlyPublic,getLogin)
globalRouter.post(routes.login,onlyPublic,postLogin)



globalRouter.get(routes.signup,onlyPublic,getSignup)
globalRouter.post(routes.signup,onlyPublic,postSignup,postLogin)

globalRouter.get(routes.logout,logout)


export default globalRouter