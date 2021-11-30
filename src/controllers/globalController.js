import Program from "../models/Program.js"
import Reserve from "../models/Reserve.js"
import User from "../models/User.js"
import passport from "passport"
import routes from "../routes.js"

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

export const postLogin = passport.authenticate('local',{
    successRedirect:routes.home,
    failureRedirect:routes.login
})

export const getSignup = async(req,res)=>{
    try{
        res.render("signup",{pageTitle:"회원가입"})
    }catch(error){
        console.log(error)
    }
}
export const postSignup=async(req,res,next)=>{
    const {body:{username,password,realname,phoneNumber,email}}=req
    try{
        const user = await User({
            username,
            realname,
            email,
            password,
            phoneNumber
        })
        await User.register(user,password)
        res.render("home",{pageTitle:"홈"})
    }catch(error){
        console.log(error)
        res.redirect(routes.home)
    }
}

export const logout = (req,res)=>{
    req.flash('info',"로그아웃 하였습니다.")
    req.logout()
    res.redirect(routes.home)
}