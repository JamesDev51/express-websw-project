import express from "express"
import { adminDash } from "../controllers/adminController"
// import { adminLogin } from "../controllers/adminController"
import routes from "../routes"
import { onlyPublic, onlyPrivate } from "../middlewares"

const adminRouter = express.Router()
adminRouter.get(routes.adminDash,adminDash)
export default adminRouter