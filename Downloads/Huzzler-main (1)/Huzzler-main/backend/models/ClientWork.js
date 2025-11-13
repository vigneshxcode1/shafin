import mongoose from "mongoose";


const ClientworkSchema = new mongoose.Schema({
    
    ServiceTitle:{
        type:String,
        required:true,
    },
    Des:{
          type:String,
        required:true,
    },
    Category:{
        type:String,
        required:true,
    },
    specificDelivery:{
          type:String,
        required:true,
    },
    minprice:{
        type:Number,
        required:true,
    },
    maxprice:{
        type:Number,
        required:true
    },
    StartDate:
    { 
        type: Number

    },
    EndDate: 
    { 
        type: Number,

    },

  DeliveryDay:{
    type:Number
  },
    Skills:{
        type:[String],
        required:true
    },
    tools:{
        type:[String],
        required:true
    },
    sample_projects:{
        type:[String],
        required:true
    },
    client_des:{
        type:String,
    }
})

const ClientworkModel = mongoose.model("Clientworkmodel",ClientworkSchema);

export default ClientworkModel;