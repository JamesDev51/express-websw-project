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

export const getLogin = async(req,res)=>{
    try{
        res.render("login",{pageTitle:"로그인"})
    }catch(error){
        console.log(error)
    }
}

export const postLogin =passport.authenticate('local',{
        successRedirect:routes.home,
        failureRedirect:routes.login})



        
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
        console.log(username,password)
        const user = await User({
            username,
            realname,
            email,
            password,
            phoneNumber
        })
        await User.register(user,password)
        next()

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
