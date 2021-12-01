

//Global
const REMAIN="" //그대로 유지
const HOME = "/" //메인  + 파주학당 소개
const LOGIN = "/login" //로그인 
const SIGNUP = "/signup" //회원가입 
const LOGOUT = "/logout" //로그아웃
const TEST="/test"

//Admin
const ADMIN="/admin" //관리자 
const ADMIN_DASH="/dash" //관리자 대시보드

//Programs
const PROGRAMS="/programs" //프로그램
const PROGRAM_DETAIL="/:id" //프로그램 상세보기
const PROGRAM_UPLOAD="/upload" //새로운 프로그램  게시글 쓰기

//Api
const API="/api" //api
const DELETE_PROGRAM="/program/delete/:id" //프로그램 삭제
const EDIT_PROGRAM="/program/edit/:id" //프로그램 수정
const RESERVE_PROGRAM="/program/reserve" //프로그램 예약
const CHECK_RESERVATION="/reservation/check" //프로그램 예약 확인
const ASK_QUESTION="/program/question" //프로그램/예약 문의사항

const routes={
    remain:REMAIN,
    home:HOME,
    test:TEST,
    signup:SIGNUP,
    login:LOGIN,
    logout:LOGOUT,
    admin:ADMIN,
    adminDash:ADMIN_DASH,
    programs:PROGRAMS,
    programUpload:PROGRAM_UPLOAD,
    programDetail:(id)=>{
        if(id){
            return `/programs/${id}`
        }else{
            return PROGRAM_DETAIL
        }
    },
    api:API,
    deleteProgram:(id)=>{
        if(id){
            return `/api/program/delete/${id}`
        }else{
            return DELETE_PROGRAM
        }
    },
    editProgram:(id)=>{
        if(id){
            return `/api/program/edit/${id}`
        }else{
            return EDIT_PROGRAM
        }
    },
    programReserveApi:RESERVE_PROGRAM,
    checkReservationApi:CHECK_RESERVATION,
    askQuestionApi:ASK_QUESTION
}
export default routes