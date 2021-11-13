import express from "express"
import { adminLogin } from "../controllers/adminController.js"
import routes from "../routes.js"

const adminRouter = express.Router()
adminRouter.get(routes.adminLogin,adminLogin)

export default adminRouter