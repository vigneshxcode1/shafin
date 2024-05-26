import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
import crypto from 'crypto'

dotenv.config()
const JWT_SECRETE= process.env.JWT_SECRETE || 'hackpandra';

const userschema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "enter your username"],
  },
  email: {
    type: String,
    required: [true, "enter your email"],
    unique: true,
    validate: [validator.isEmail,"please enter your valid email"],
  },
  password: {
    type: String,
    required: [true, "enter your password"],
  
    select:false
  },
  avatar: {
    type: String,

  },

  role: {
    type: String,
    default: "user",
  },

  resetpasswordtoken: {
    type: String,
  },

  resetpasswordtokenexpired: {
    type: Date,
  },
  createAttime: {
    type: Date,
    default: Date.now(),
  },
});




//bcrypt
userschema.pre('save',async function(next){
 if(! this.isModified('password')){
  next()
 }
  this.password= await bcrypt.hash(this.password, 10)
  })

  //jwt
userschema.methods.getJwtToken = function() {
  return jwt.sign(
    { id:this.id },JWT_SECRETE,{expiresIn:'1d'});
};

//valid password
userschema.methods.isValidPassword= async function (enteredpassword){
 return  await bcrypt.compare(enteredpassword,this.password)
}

//reset token

userschema.methods.getResetToken=async function(){
const token = crypto.randomBytes(20).toString('hex')
this.resetpasswordtoken= crypto.createHash('sha256').update(token).digest('hex')
this.resetpasswordtokenexpired=Date.now()+30*60*1000
return token
}

//


const usermodel = mongoose.model('user',userschema)

export default usermodel