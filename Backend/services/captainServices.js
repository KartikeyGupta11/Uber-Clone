import captainModel from "../models/captainModel.js";

const createCaptain = async({firstName, LastName, email, password, model, color, plate, capacity, vehicleType}) => {
    if(!firstName || !email || !password || !model || !color || !plate || !capacity || !vehicleType){
        throw new Error('All fields are required');
    }

    const captain = captainModel.create({
        fullname:{
            firstName,
            LastName
        },
        email,
        password,
        vehicle:{
            model,
            color,
            plate,
            capacity,
            vehicleType
        }
    })

    return captain;
}

export default createCaptain;