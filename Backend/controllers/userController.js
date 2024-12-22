import userModel from "../models/userModel.js";
import createUser from "../services/userServices.js";
import { validationResult } from "express-validator";

const registerUser = async(req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {fullname, email, password} = req.body;
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

export default registerUser;