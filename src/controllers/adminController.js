import Program from "../models/Program"
import Reserve from "../models/Reserve"
import Question from "../models/Question"
import User from "../models/User"
import routes from "../routes"

export const adminDash = async(req,res)=>{
    const questions =  await Question.find({}).sort({_id:-1}).populate('userId')
    const programs =  await Program.find({}).sort({_id:-1})
    const reservations =  await Reserve.find({}).sort({_id:-1}).populate('userId')
    res.render("admin/adminDash",{pageTitle:"관리자 페이지",questions,programs,reservations})
}