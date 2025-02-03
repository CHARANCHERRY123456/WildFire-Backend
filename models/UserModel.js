import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import { habitSchema } from './HabitModel.js';

const userSchema = new mongoose.Schema({
    username : {type : String , required:true , unique:true},
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    name : {
        type : String , 
        required : true,
        default : "Pushpa"
    },
    profilePic: {
         type: String, default: 'https://www.deccanchronicle.com/h-upload/2024/07/24/1826242-alluarjuninpushpa.webp' 
    },
    habits : [habitSchema],
},
{timestamps:true}
)

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next();
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
})

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword , this.password);
}

const User = mongoose.model('User' , userSchema);
export default User;