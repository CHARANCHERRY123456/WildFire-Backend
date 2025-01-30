import mongoose from "mongoose";
// all the user schema will come here
const userSchema = new mongoose.Schema({

    password : {type : String , required:true},
    email : {
        type : String,
        required : true,
        unique : true
    },
    name : {
        type : String , 
        required : true
    }
})

const User = mongoose.model('User' , userSchema);
export default User;