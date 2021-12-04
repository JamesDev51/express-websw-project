import Program from "../models/Program"
import Reserve from "../models/Reserve"
import Question from "../models/Question"
import httpStatusCode from "http-status-codes"
import User from "../models/User"

export const deleteProgram = async(req,res)=>{
    console.log("deleteProgram")
    res.send("delete")
}
export const editProgram = async(req,res)=>{
    console.log("editProgram")
}

export const reserveProgram = async(req,res)=>{
    try{
        const {body:{programName,username,phoneNumber,peopleNum,email,message,userId}}=req
        const program = await Program.findOne({title:programName})
        const programId=program._id
        const reservationCode = await createReservationNumber(email,phoneNumber)
        let newReserve
        let user=null
        if(userId===null){
            newReserve = await Reserve.create({
                name:username,
                email,
                phoneNumber,
                peopleNum,
                message,
                program:programId,
                reservationCode
            })
            
        }else{
            user=await User.findById(userId)
            newReserve = await Reserve.create({
                name:username,
                email,
                phoneNumber,
                peopleNum,
                message,
                program:programId,
                reservationCode,
                userId
            })
            user.programList.push(programId)
            user.reserveList.push(newReserve._id) 
            user.save()
            
        }
        program.reserveList.push(newReserve._id) 
        program.save()
        res.send({reservationData:newReserve,status:httpStatusCode.OK,user:user})
        
    }catch(e){
        console.log(e)
        res.send({e:e,status:httpStatusCode.INTERNAL_SERVER_ERROR})
    }
    
}

const createReservationNumber = async(email,phoneNumber)=>{
    let foreEmail = email.split("@")[0]
    let lastPhoneNumber=phoneNumber.substr(phoneNumber.length-4,4)
    let now = new Date();
    let milli=await now.getTime()
    let reservatiionNumber= foreEmail + milli+lastPhoneNumber
    return reservatiionNumber
}

export const checkReservation = async(req,res)=>{
    try{
        const {body:{reservationCode,userId}}=req
        let reservation
        let reservationData=[]
        if(userId===null){
            //비회원 로직
            reservation = await Reserve.findOne({reservationCode}).populate('program')
            reservationData.push(reservation)
            res.send({reservationData,status:httpStatusCode.OK})
        }else{
            const user = await User.findById(userId)
            for(let i=0;i<user.programList.length;i++){
                reservation = await Reserve.findById(user.reserveList[i]).populate('program')
                
                reservationData.push(reservation)
            }
            res.send({reservationData,status:httpStatusCode.OK})
        }
        
    }catch(e){
        console.log(e)
        res.send({e:e,status:httpStatusCode.INTERNAL_SERVER_ERROR})
    }
}

export const askQuestion = async(req,res)=>{
    try{
        const {body:{name,phoneNumber,email,message,userId}}=req
        let question
        if(userId===null){
            //비회원 문의
            question=await  Question.create({
                name,
                email,
                phoneNumber,
                message
            })
            res.send({questionData:question,status:httpStatusCode.OK})
        }else{
            //회원 문의
            question=await  Question.create({
                name,
                email,
                phoneNumber,
                message,
                userId
            })
            res.send({questionData:question,status:httpStatusCode.OK})
            
        }

    }catch(e){
        console.log(e)
        res.send({e:e,status:httpStatusCode.INTERNAL_SERVER_ERROR})
    }

}