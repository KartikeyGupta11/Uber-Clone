import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const captainSchema = new mongoose.Schema({
    fullname:{
        firstName:{
            type:String,
            required:true,
        },

        LastName:{
            type:String
        }
    },

    email:{
        type:String,
        required:true,
        unique:true,
        match:[/^\S+@\S+\.\S+$/,'Invalid email format']
    },

    password:{
        type:String,
        required:true,
        select:false,
        minLength:[6,'Password must be of atleast 6 characters']
    },

    socketId:{
        type:String
    },

    status:{
        type:String,
        enum:['active','inactive'],
        default:'active'
    },

    vehicle:{
        model:{
            type:String,
            required:true,
            minLength:[3,'Model must be of atleast 3 characters']
        },

        vehicleType:{
            type:String,
            required:true,
            enum:['Sedan','HatchBack','SUV','Bike','Auto']
        },

        color:{
            type:String,
            required:true,
            minLength:[3,'Color must be of atleast 3 characters']
        },

        plate:{
            type:String,
            required:true,
            minLength:[3,'Plate must be of atleast 3 characters']
        },

        capacity:{
            type:Number,
            required:true,
            min:[1,'Capacity must be of atleast 1']
        }
    },

    location:{
        latitude:{
            type:Number
        },

        longitude:{
            type:Number
        }
    }
})

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET, {expiresIn:'24h'});
    return token;
}

captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}

const captainModel = mongoose.model('captain',captainSchema);
export default captainModel;