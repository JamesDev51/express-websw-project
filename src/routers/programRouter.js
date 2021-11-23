import express from "express"
import { programDetail,  programReserve,  programs,  programUpload } from "../controllers/programController.js"
import routes from "../routes.js"

const programRouter = express.Router()

programRouter.get(routes.remain,programs)
programRouter.get(routes.programUpload,programUpload)
programRouter.get(routes.programDetail(),programDetail)
programRouter.get(routes.programReserve(),programReserve)
export default programRouter