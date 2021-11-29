import routes from "../routes.js"
import Program from "../models/Program.js"
import httpStatus from "http-status"

export const programs = async(req,res)=>{
    res.render("programs/programs")
}
export const programDetail = async(req,res)=>{
    res.render("programs/programDetail")
}
export const getProgramUpload = async(req,res)=>{
    res.render("programs/programUpload")
}

export const postProgramUpload = async(req,res)=>{
    const {body:{category,title,content},files}=req;
    let paths=[]
    for(let i in files){
        paths.push(files[i].path)
    }
    const newProgram = await Program.create({
        title,
        content,
        category,
        photoUrl:paths
    })
    res.redirect("/")
}
export const programReserve = async(req,res)=>{
    res.render("programs/programReserve")
}