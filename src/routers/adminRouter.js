import express from "express"
import { adminDash } from "../controllers/adminController.js"
// import { adminLogin } from "../controllers/adminController.js"
import routes from "../routes.js"

const adminRouter = express.Router()
adminRouter.get(routes.adminDash,adminDash)
export default adminRouter