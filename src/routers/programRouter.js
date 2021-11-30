import express from "express"
import { programDetail,  programReserve,  programs,  getProgramUpload,postProgramUpload } from "../controllers/programController.js"
import { uploadPhotos } from "../middlewares.js"
import routes from "../routes.js"
import { onlyPublic, onlyPrivate } from "../middlewares.js"

const programRouter = express.Router()

programRouter.get(routes.remain,programs)

programRouter.get(routes.programUpload,getProgramUpload)
programRouter.post(routes.programUpload,uploadPhotos,postProgramUpload)


programRouter.get(routes.programDetail(),programDetail)
programRouter.get(routes.programReserve(),programReserve)
export default programRouter