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
  },

  orderItems:[{
    name:{
        type:String,
        required:true,
    },
    quantity:{
        type:String,
        required:true
    },
    images:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'product'
    }
  }],

  itemprice:{
    type:Number,
    required:true,
    default:0
},

taxprice:{
    type:Number,
    required:true,
    default:0.0
},

shippingprice:{
    type:Number,
    required:true,
    default:0.0
},

totalprice:{
    type:Number,
    required:true,
    default:0.0
},

paytimeAT:{
type:Date
}
,
deliverytimeAT:{
type:Date
},
orderStatus:{
    type:String,
    required:true,
    default:'processing'
},

createdAt:{
    type:Date,
    default:Date.now()
}

})

const ordermodel=mongoose.model('order',orderSchema)

export default ordermodel