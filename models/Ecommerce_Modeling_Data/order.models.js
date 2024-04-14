import mongoose from 'mongoose'

// Product order item track schema model
const orderItemsSchema = new mongoose.Schema({
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true
    }
})

// Addreas schema model
const addreasSchema = new mongoose.Schema({
    name:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    city:{
        type:String,
        required:true
    },
    area:{
        type:String,
        required: true,
    },
    house:{
        type:String,
        required: true,
    }

})



const orderSchema = new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    orderItems:{
         type: [orderItemsSchema]
    },
    addreas:{
        type:[addreasSchema]
    }
}, {timestamps:true})

export const Order = mongoose.model('Order', orderSchema)