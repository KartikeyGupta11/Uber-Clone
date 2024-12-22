import userModel from "../models/userModel.js";

const createUser = async({firstName, LastName, email, password}) => {
    if(!firstName || !email || !password){
        throw new Error('All fields are required');
    }

    const user = userModel.create({
        fullname:{
            firstName,
            LastName
        },
        email,
        password
    })

    return user;
}

export default createUser;