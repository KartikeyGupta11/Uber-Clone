import userModel from "../models/userModel.js";
import createUser from "../services/userServices.js";
import { validationResult } from "express-validator";
import BlacklistTokenModel from "../models/blacklistTokenModel.js";

export const registerUser = async(req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {fullname, email, password} = req.body;

    const isUserAlreqdyExist = await userModel.findOne({email})
    if(isUserAlreqdyExist){
        return res.status(400).json({message:"User already exists with this email"});
    }

    const hashedPassword = await userModel.hashPassword(password);
    const user = await createUser({
        firstName: fullname.firstName,
        lastName: fullname.lastName,
        email, 
        password: hashedPassword
    });

    const token = user.generateAuthToken();
    res.status(201)
    .json({
        token,
        user
    })
}

export const loginUser = async(req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {email, password} = req.body;

    const user = await userModel.findOne({email}).select('+password');
    if(!user){
        return res.status(401).json({message:"Invalid email or password"});
    }

    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message:"Invalid email or password"});
    }

    const token = user.generateAuthToken();

    res.cookie('token',token);

    res.status(200)
    .json({
        token,
        user
    }) 
}

export const getUserProfile = async(req,res,next) => {
    res.status(200)
    .json(req.user);
}

export const logoutUser = async(req,res,next) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    await BlacklistTokenModel.create({token});

    res.status(200)
    .json({message:"Logged out successfully"});
}