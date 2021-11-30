import Program from "../models/Program.js"
import Reserve from "../models/Reserve.js"

export const home = async(req,res)=>{
    try{
        const programs =  await Program.find({}).sort({_id:-1})
        res.render("home",{pageTitle:"홈",programs:programs})
    }catch(error){
        console.log(error)
    }
}
export const test = async(req,res)=>{
    res.render("test")
}
export const postTest = async(req,res)=>{
    const {body:{programTitle,name,email,phoneNumber,quantity,message}}=req
    const program = await Program.findOne({title:programTitle})
    const programId=program._id
    const reservationCode = createReservationNumber(email)
    const newReserve = await Reserve.create({
        name,
        email,
        phoneNumber,
        quantity,
        message,
        program:programId,
        reservationCode
    })
    res.send({reservationCode:reservationCode})
}


const createReservationNumber = (email)=>{
    let foreEmail = email.split("@")[0]
    let now = new Date();
    let milli=now.getTime()
    let reservatiionNumber= foreEmail + milli

    return reservatiionNumber
}

export const getLogin = async(req,res)=>{
    try{
        res.render("login",{pageTitle:"로그인"})
    }catch(error){
        console.log(error)
    }
}
export const getSignup = async(req,res)=>{
    try{
        res.render("signup",{pageTitle:"회원가입"})
    }catch(error){
        console.log(error)
    }
}