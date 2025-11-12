import bcrypt from 'bcryptjs'
import UserModel from "../model/Usermodel.js";
import crypto from 'crypto'
import usermodel from '../model/Usermodel.js';

let cookiesexpiretime=30
export const register = async (req, res, next) => {
    try {
        const { username, email, password, avatar } = req.body;
        
        const hash = await bcrypt.hash(password, 10);

        // Create a new user in the database
        const user = await UserModel.create({ username, email, password: hash, avatar });

        // Generate JWT token for the user
        const token = user.getJwtToken();

        // Settings cookies
        const option = {
            expires: new Date(Date.now() + cookiesexpiretime * 24 * 60 * 60 * 1000),
            httpOnly: true
        };

        // Send response with user data and token
        res.status(200).cookie('token', token, option).json({
            success: true,
            message: "User registration successful",
            user,
            token
        });
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};


//login controller
export const  loginuser=async(req,res)=>{
    const {email,password}=req.body
    if(!email||!password){
        return res.status(400).json("please enter email and password")
    }
    const user = await UserModel.findOne({email}).select('+password')
    const token = user.getJwtToken();
    const option = {
      expires: new Date(Date.now() + cookiesexpiretime * 24 * 60 * 60 * 1000),
      httpOnly: true,  secure: true, 
      sameSite: 'strict'
  };

    if(!user){
   
        return res.status(400).json({
            success:false,
            message:"user invalid email or password"
        })
    }
    res.status(200).cookie('token',token,option).json({
        success: "success",
        role:user.role,
        message: "User login  successful",
        user,
        token
        
    })

}

//getallusers

export const getallusers=async(req,res,next)=>{


    const user = await UserModel.find()
    if(!user){
      return   res.status(401).json({
            success:false,
            message:"no users found"
        })
    }

    res.status(200).json({
        success: true,
        message: "all users in database",
        user,
    })

}

//forget password 
export const forgetpassword =async (req,res,next)=>{
const user = await UserModel.findOne({email:req.body.email})
if(!user){
    return res.status(401).json({
        success:true,
        message:"user not found"
    })
}
const resetToken=user.getResetToken()
await user.save({validateBeforeSave:false})
const resetUrl = `${req.protocol}://localhost:8000/api/v1/password/reset/${resetToken}`
const message = `your password reset url is as follows\n ${resetUrl}\n if you have not request this email then ignore it`

try {
    sentemail({
        email:user.email,
        subject:'appliaction password recovery',
        message,
        resetToken
    })
    res.status(200).json({
        success:true,
        message:`email sent to ${user.email}`
    })
} catch (error) {
    user.resetpasswordtoken=undefined;
    user.resetpasswordtokenexpired=undefined
    await user.save({validateBeforeSave:false})

    return next(error.message)
}
}


//reset password
export const resetpassword=async(req,res,next)=>{
 const resetpasswordtoken = crypto.Hash('sha256').update(req.param.token).digest()
 const user = await UserModel.findOne({resetpasswordtoken,resetpasswordtokenexpired:{
    $gt:Date.now()
 }})

 if(!user){
    return next(res.json({
        message:"password reset token is invalid or expired"
    }))
 }
 if(req.body.password!==req.body.confirmpassword){
    return next(res.json({
        message:"password reset token is invalid or expired"
    }))
}
try {
    sentemail({
        email:user.email,
        subject:"password recovery",
        message,

    })
    res.status(200).json({
        success:true,
        message:`email sent to ${user.email}`
    })
} catch (error) {
    user.password=req.body.password
user.resetpasswordtoken=undefined
user.resetpasswordtokenexpired=undefined
await user.save({validateBeforeSave:false})
return next(res.status(500).json({
    success:false,
    message:"internal server error"
}))
}


}


//get user profile

export const getuserprofile = async(req,res,next)=>{
    try {
        const user = await usermodel.findById(req.user.id)
res.status(200).json({
    success:true,
    message:"success getuserprofile",
    user
})
    } catch (error) {
        console.log(err)
    }

}

//update profile

export const  updateprofile=async(req,res,next)=>{
  try {
    const newuserData={
      username:req.body.username,
      email:req.body.email,
    }
    const updateuser = await usermodel.findByIdAndUpdate(req.user.id,newuserData,{
      new:true,
      runValidators:true
    })
    res.status(200).json({
      success:true,
      message:"success update userprofile",
      updateuser
    })
  } catch (err) {
    console.log(err)
  }

 
}

//getallusers by admin

export const getalluser=async(req,res,next)=>{
  if(!user){
    return  res.status(401).json({
      success:false,
      message:"user not found"
    })
  }
const user = await usermodel.find()
res.status(200).json({
  success:true,
  message:"success getusers",
  user
})
}

//get specific user - admin
export const getspecificuser=async(req,res,next)=>{
  const user = await usermodel.findById(req.params.id)
  if(!user){
    return  res.status(401).json({
      success:false,
      message:"user not found with this id"
    })
  }
 
  res.status(200).json({
    success:true,
    message:"success getusers",
    user
  })
  }

  //update user-admin

  export const updateuser=async(req,res,next)=>{
    try {
      const newuserData={
        username:req.body.username,
        email:req.body.email,
        role:req.body.role
      }
      const user = await usermodel.findByIdAndUpdate(req.param.id,newuserData,{
        new:true,
        runValidators:true
      })
      res.status(200).json({
        success:true,
        message:"success update user",
        newuserData,
        user
      })
    } catch (err) {
      console.log(err)
    }


    }

    //delete user - admin
    export const deleteuser=async(req,res,next)=>{
      try {
        
        const user = await usermodel.findByIdAndDelete(req.param.id,{
          new:true,
          runValidators:true
        })
        res.status(200).json({
          success:true,
          message:"success delete userprofile",
        
        })
      } catch (err) {
        console.log(err)
      }
      }