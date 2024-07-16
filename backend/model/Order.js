import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email:{
    type:String,
    required:true
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  pin: {
    type: String,
    required: true,
  
  },
});

const OrderModel = mongoose.model("Order", orderSchema);

export default OrderModel;
