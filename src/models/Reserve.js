import mongoose from "mongoose";
import moment from "moment-timezone"

moment.tz.setDefault("Asia/Seoul");
const currentDateKorea = moment().tz(`Asia/Seoul`).format("YYYY-MM-DD HH:mm")

const ReserveSchema = new mongoose.Schema({
    name:String,
    email:String,
    phoneNumber:String,
    quantity:Number,
    message:String,
    program:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Program"
    },
    reservationCode:String
})

const model = mongoose.model("Reserve",ReserveSchema)

export default model