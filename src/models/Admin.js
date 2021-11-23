import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose"
import moment from "moment-timezone"

moment.tz.setDefault("Asia/Seoul");
const currentDateKorea = moment().tz(`Asia/Seoul`).format("YYYY-MM-DD HH:mm")

const AdminSchema = new mongoose.Schema({
    name:String,
    email:{
        
    }
})