import routes from "../routes"
import Program from "../models/Program"
import httpStatusCode from "http-status-codes"

export const programs = async(req,res)=>{
    const programs =  await Program.find({}).sort({_id:-1})
    res.render("programs/programList",{pageTitle:"프로그램 목록",programs:programs})
}
export const programDetail = async(req,res)=>{
    const {params:{id}}=req
    console.log("id : ",id)
    const program = await Program.findById(id)
    console.log(program)
    res.render("programs/programDetail",{pageTitle:program.title,program})
}

export const getProgramUpload = async(req,res)=>{
    res.render("programs/programUpload",{pageTitle:"프로그램 업로드"})
}

export const postProgramUpload = async(req,res)=>{
    const {body:{category,title,content,date},files}=req;
    let paths=[]
    for(let i in files){
        paths.push(files[i].location)
    }
    if(paths.length===0){
        paths.push("https://pajuhakdang-project.s3.ap-northeast-2.amazonaws.com/Photo/pajuhakdang.PNG")
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