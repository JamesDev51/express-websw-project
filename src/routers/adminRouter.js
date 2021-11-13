import express from "express"
import { adminDash, adminLogin } from "../controllers/adminController.js"
// import { adminLogin } from "../controllers/adminController.js"
import routes from "../routes.js"

const adminRouter = express.Router()
adminRouter.get(routes.adminLogin,adminLogin)
adminRouter.get(routes.adminDash,adminDash)
export default adminRouter