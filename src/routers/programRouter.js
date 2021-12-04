import express from "express"
import { programDetail,  programs,  getProgramUpload,postProgramUpload } from "../controllers/programController"
import { uploadPhotos } from "../middlewares"
import routes from "../routes"
import { onlyPublic, onlyPrivate } from "../middlewares"

const programRouter = express.Router()

programRouter.get(routes.remain,programs)

programRouter.get(routes.programUpload,getProgramUpload)
programRouter.post(routes.programUpload,uploadPhotos,postProgramUpload)


programRouter.get(routes.programDetail(),programDetail)
export default programRouter