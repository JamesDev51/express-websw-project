import express from "express"
import { home } from "../controllers/globalController.js"
import routes from "../routes.js"

const globalRouter = express.Router()

//home

globalRouter.get(routes.remain,home)


export default globalRouter