import express from "express"
import { adminDash } from "../controllers/adminController"
// import { adminLogin } from "../controllers/adminController"
import routes from "../routes"
import { onlyPublic, onlyPrivate, onlyAdmin } from "../middlewares"

const adminRouter = express.Router()
adminRouter.get(routes.adminDash,onlyAdmin,adminDash)
export default adminRouter