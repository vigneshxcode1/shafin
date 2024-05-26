const sendtoken=(user,statusCode,res,option)=>{
    const token = user.getJwtToken()

    res.status(statusCode).json({
        success:true,
    token,
    user,
    option
    })
}

export default sendtoken