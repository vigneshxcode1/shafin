import jwt from "jsonwebtoken";
import userModel from "../model/Usermodel.js";

const JWT_SECRET = "hackpandra";

export const isauthticateuser = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Login first to access resource",
            });
        }

        const decode = jwt.verify(token, JWT_SECRET);
        req.user = await userModel.findById(decode.id);
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    }
};
export const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(401).json({
                success: false,
                message: `Role '${req.user ? req.user.role : "guest"}' is not allowed`
            });
        }
        next();
    };
};


export const logout = (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  }).status(200).json({
    success:true,
    message:'logout'
  })
};