import  routes from "./routes.js"
import multer from "multer"
import multerS3 from "multer-s3"
import aws from "aws-sdk"
import User from "./models/User.js"

import dotenv from "dotenv"
dotenv.config()

//multer - aws
/*
const s3 = new aws.S3({
    accessKeyId:process.env.AWS_KEY,
    secretAccessKey:process.env.AWS_PRIVATE_KEY,
    region:"ap-northeast-2"
})

const multerPhoto = multer({
    storage:multerS3({
        s3,
        acl:"public-read",
        bucket:"pajuhakdang-project/Photo"
    })
})
*/

//multer - local
const multerPhoto = multer({dest:"uploads/photo/"});
// export const uploadPhoto = multerPhoto.single("photoFile")
export const uploadPhotos = multerPhoto.array("photoFile",5)



export const localMiddleware = async(req,res,next)=>{
    next();
}