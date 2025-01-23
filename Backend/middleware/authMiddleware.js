import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import BlacklistTokenModel from "../models/blacklistTokenModel.js";
import captainModel from "../models/captainModel.js";

export const authUser = async(req,res,next) => {
    const token =  req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }

    const isBlackListed = await BlacklistTokenModel.findOne({token:token}); 
    if(isBlackListed){
        return res.status(401).json({message:"Unauthorized"});
    }

    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        const user = await userModel.findById(decode._id);
        req.user = user;
        return next();
    } catch (error) {
        return res.status(401).json({message:"Unauthorized"});
    }
}

export const authCaptain = async(req,res,next) => {
    const token =  req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }

    const isBlackListed = await BlacklistTokenModel.findOne({token:token}); 
    if(isBlackListed){
        return res.status(401).json({message:"Unauthorized"});
    }

    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        const captain = await captainModel.findById(decode._id);
        req.captain = captain;
        return next();
    } catch (error) {
        return res.status(401).json({message:"Unauthorized"});
    }   
}