import express from "express"
import { askQuestion, checkReservation, deleteProgram, editProgram, reserveProgram } from "../controllers/apiController"
import routes from "../routes"
import { onlyPublic, onlyPrivate } from "../middlewares"

const apiRouter = express.Router()
apiRouter.get(routes.deleteProgram(),deleteProgram) //프로그램 삭제
apiRouter.post(routes.editProgram(),editProgram) //프로그램 수정
apiRouter.post(routes.programReserveApi,reserveProgram) //프로그램 예약
apiRouter.post(routes.checkReservationApi,checkReservation) //예약 확인
apiRouter.post(routes.askQuestionApi,askQuestion) //문의사항
export default apiRouter