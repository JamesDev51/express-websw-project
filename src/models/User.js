import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose"
import moment from "moment-timezone"

moment.tz.setDefault("Asia/Seoul");
const currentDateKorea = moment().tz(`Asia/Seoul`).format("YYYY-MM-DD HH:mm")

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required: "Username is required"
    },
    realname:String,
    email:{
        type:String,
        default:"이메일"
    },
    phoneNumber:String,
    createdAt:{
        type:String,
        default:currentDateKorea
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    programList:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Program"
        }
    ]
})

UserSchema.plugin(passportLocalMongoose,{usernameField:"username"})

const model = mongoose.model("User",UserSchema)

export default model