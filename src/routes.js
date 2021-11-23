

//Global
const REMAIN="" //그대로 유지
const HOME = "/" //메인  + 파주학당 소개

//Admin
const ADMIN="/admin" //관리자 
const ADMIN_LOGIN = "/login" //관리자 로그인 
const ADMIN_LOGOUT = "/logout" //관리자 로그아웃
const ADMIN_DASH="/dash" //관리자 대시보드

//Programs
const PROGRAMS="/programs" //프로그램
const PROGRAM_DETAIL="/:id" //프로그램 상세보기
const PROGRAM_RESERVE="/reserve/:id" //프로그램 예약하기
const PROGRAM_UPLOAD="/upload" //새로운 프로그램  게시글 쓰기

//Api
const API="/api" //api
const DELETE_PROGRAM="/program/delete/:id" //프로그램 삭제
const EDIT_PROGRAM="/program/edit/:id" //프로그램 수정
const RESERVE_PROGRAM="/program/reserve/:id" //프로그램 예약

const routes={
    remain:REMAIN,
    home:HOME,
    admin:ADMIN,
    adminLogin:ADMIN_LOGIN,
    adminLogout:ADMIN_LOGOUT,
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
    programReserve : (id)=>{
        if(id){
            return `/programs/reserve/${id}`
        }else{
            return PROGRAM_RESERVE
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
    programReserveApi:(id)=>{
        if(id){
            return `/api/programs/reserve${id}`
        }else{
            return RESERVE_PROGRAM
        }   
    }
}
export default routes