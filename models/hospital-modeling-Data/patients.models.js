import mongoose from "mongoose";

const patientsSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    diagonsedWith:{
        type:String,
        required:true
    },
    addreas:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    bloodGroup:{
        type:String,
        enum:['A','B','AB','O'],
        required:true
    },
    gender:{
        type:String,
        enum:["Male", "Female", "Shemale","Other"]
    }

}, {timestamps:true})


export const Patients = mongoose.model('patients', patientsSchema)