import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required: true
    },
    qualification:{
        type:String,
        required:true
    },
    experienceInYear:{
        type:Number,
        default:0
    },
    worksInHospitals:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hospital",
            default:0
        }
    ]
}, {timestamps:true})
        

export const Doctor = mongoose.model('Doctor', doctorSchema) 