import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
},
{timestamps:true})


export const category = mongoose.model("category", categorySchema)