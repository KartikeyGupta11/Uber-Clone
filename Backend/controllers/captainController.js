import captainModel from "../models/captainModel.js";
import createCaptain from "../services/captainServices.js";
import { validationResult } from "express-validator";

export const registerCaptain = async(req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {fullname, email, password, vehicle} = req.body;

    const isCapatinAlreqdyExist = await captainModel.findOne({email})
    if(isCapatinAlreqdyExist){
        return res.status(400).json({message:"Captain already exists with this email"});
    }

    const hashedPassword = await captainModel.hashPassword(password);
    const captain = await createCaptain({
        firstName: fullname.firstName,
        lastName: fullname.lastName,
        email, 
        password: hashedPassword,
        model: vehicle.model,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });

    const token = captain.generateAuthToken();
    res.status(201)
    .json({
        token,
        captain
    })
}