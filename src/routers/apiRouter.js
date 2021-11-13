import express from "express"
import { deleteProgram, editProgram, reserveProgram } from "../controllers/apiController.js"
import routes from "../routes.js"

const apiRouter = express.Router()
apiRouter.get(routes.deleteProgram(),deleteProgram) //프로그램 삭제
apiRouter.post(routes.editProgram(),editProgram) //프로그램 수정
apiRouter.post(routes.programReserveApi(),reserveProgram) //프로그램 예약

export default apiRouter