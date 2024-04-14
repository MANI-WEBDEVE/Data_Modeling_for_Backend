import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    productImage:{
        type:String
    },
    price:{
        type:Number,
        default:0
    },
    stuck:{
        type:Number,
        default:0
    },
    categroy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'category',
        required:true
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    }
}, {timestamps:true})

export const Product = mongoose.model("Product", productSchema) 