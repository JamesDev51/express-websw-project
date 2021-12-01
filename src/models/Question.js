import mongoose from "mongoose";
import moment from "moment-timezone"

moment.tz.setDefault("Asia/Seoul");
const currentDateKorea = moment().tz(`Asia/Seoul`).format("YYYY-MM-DD HH:mm")

const QuestionSchema = new mongoose.Schema({
    name:String,
    email:String,
    phoneNumber:String,
    message:String,
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

const model = mongoose.model("Question",QuestionSchema)

export default model