import mongoose  from "mongoose";

const orderSchema=mongoose.Schema({
  shippinginfo:{
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true,
        default:'chennai'
        
    },
    country:{
        type:String,
        required:true,
        default:"india"
    },
    phone:{
        type:String,
        required:true
    },
    pin:{
        type:String,
        required:true
    }
  

  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    require:true,
    ref:'user'
  }

})

const ordermodel=mongoose.model('order',orderSchema)

export default ordermodel