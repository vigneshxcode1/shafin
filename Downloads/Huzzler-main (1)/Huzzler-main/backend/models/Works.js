import mongoose from "mongoose";


const workSchema = new mongoose.Schema({
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
    minprice:{
        type:Number,
        required:true,
    },
    maxprice:{
        type:Number,
        required:true
    },
    Deliverydays:{
        type:Number,
        required:true
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

const workModel = mongoose.model("workmodel",workSchema);

export default workModel;