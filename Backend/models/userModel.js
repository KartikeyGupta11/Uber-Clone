import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
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
        unique:true
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
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET)
    return token;
}

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
} 

const userModel = mongoose.model('user',userSchema);
export default userModel;