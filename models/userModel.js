import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import Habit from './habitModel.js';
// all the user schema will come here
const userSchema = new mongoose.Schema({

    username : {type : String , required:true , unique:true},
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        require : true
    },
    name : {
        type : String , 
        required : true,
        default : "Pushpa"
    },
    profilePic: {
         type: String, default: 'https://www.deccanchronicle.com/h-upload/2024/07/24/1826242-alluarjuninpushpa.webp' 
    },
    habits : [Habit],
},
{timestamps:true}
)

userSchema.pre('save' , async (next)=>{
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
})

userSchema.methods.matchPassword = async (enteredPassword)=>{
    return await bcrypt.compare(enteredPassword , this.password);
}

const User = mongoose.model('User' , userSchema);
export default User;