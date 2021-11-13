import express from "express"
import { programDetail,  programs,  programUpload } from "../controllers/programController.js"
import routes from "../routes.js"

const programRouter = express.Router()

programRouter.get(routes.remain,programs)
programRouter.get(routes.programDetail,programDetail)
programRouter.get(routes.programUpload,programUpload)

export default programRouter