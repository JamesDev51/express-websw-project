export const programs = async(req,res)=>{
    res.render("programs/programs")
}
export const programDetail = async(req,res)=>{
    res.render("programs/programDetail")
}
export const programUpload = async(req,res)=>{
    res.render("programs/programUpload")
}
export const programReserve = async(req,res)=>{
    res.render("programs/programReserve")
}