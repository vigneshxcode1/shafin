import express, { Router } from 'express'
import { deleteuser, forgetpassword, getallusers, getspecificuser, getuserprofile, loginuser, register, resetpassword, updateprofile, updateuser } from '../controllers/authControllers.js'
import {  authorizeRoles, isauthticateuser, logout } from '../middlewares/Authenticate.js'

const userrouter = express.Router()

userrouter.post('/register',register)
userrouter.post('/login',loginuser)
userrouter.get('/logout',logout)
userrouter.get('/getallusers',getallusers)
userrouter.post('/password/forgot',forgetpassword)
userrouter.post('/password/reset/:token',resetpassword)
userrouter.get('/myprofile',isauthticateuser,getuserprofile)
userrouter.put('/updateuserprofile',isauthticateuser,updateprofile)


//admin routes
userrouter.get('/admin/users',isauthticateuser,authorizeRoles('admin'),getallusers)
userrouter.get('/admin/users/:id',isauthticateuser,authorizeRoles('admin'),getspecificuser)
userrouter.put('/admin/users/:id',isauthticateuser,authorizeRoles('admin'),updateuser)
userrouter.delete('/admin/users/:id',isauthticateuser,authorizeRoles('admin'),deleteuser)




export default userrouter