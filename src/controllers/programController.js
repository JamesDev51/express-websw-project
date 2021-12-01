import routes from "../routes.js"
import Program from "../models/Program.js"
import httpStatusCode from "http-status-codes"

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
    const {body:{category,title,content,date},files}=req;
    let paths=[]
    for(let i in files){
        paths.push(files[i].path)
    }
    const newProgram = await Program.create({
        title,
        content,
        category,
        photoUrls:paths,
        date
    })
    res.redirect("/")
}
export const programReserve = async(req,res)=>{
    res.render("programs/programReserve")
}