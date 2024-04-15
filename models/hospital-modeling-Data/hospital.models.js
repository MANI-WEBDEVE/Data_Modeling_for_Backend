import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    addreasLine1:{
        type:String,
        required:true
    },
    addreasLine2:{
        type:String,
    },
    city:{
        type:String,
        required:true
    },
    pinCode:{
        type:string
    },
    specialization:[
        {
            type:String
        }
    ]
}, {timestamps:true})


export const Hospital = mongoose.model('Hospital', hospitalSchema)