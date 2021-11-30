import mongoose from "mongoose";
import moment from "moment-timezone"

moment.tz.setDefault("Asia/Seoul");
const currentDateKorea = moment().tz(`Asia/Seoul`).format("YYYY-MM-DD HH:mm")

const ProgramSchema = new mongoose.Schema({
    category:String,
    author:String,
    title:String,
    createdAt:{
        type:String,
        default:currentDateKorea
    },
    photoUrls:[{
        type:String
    }],
    content:String,
    date:String
})

const model = mongoose.model("Program",ProgramSchema)

export default model