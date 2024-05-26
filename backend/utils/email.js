import nodemailer from 'nodemailer'

const SMTP_HOST='sandbox.smtp.mailtrap.io'
const SMPT_PORT=2525
const SMPT_USER="8bed8869667b89"
const SMPT_PASS="359edc8150f172"
const SMPT_FROM_NAME='vignesh'
const SMPT_FROM_EMAIL='vicky@getMaxListeners.com'

const sentemail =async option=>{
const transport = {
    host :SMTP_HOST,
    port :SMPT_PORT,
    auth:{
        user:SMPT_USER,
        pass:SMPT_PASS
    }
}
const transporter=nodemailer.createTransport(transport)

const message = {
    from:`${SMPT_FROM_NAME}<>${SMPT_FROM_EMAIL}`,
    to:options.email,
    subject:options.subject,
    text:options.message
}
transporter.sendMail(message)
   

}

export default sentemail