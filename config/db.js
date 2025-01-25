import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI );
        console.log("MongoDb connected");
    }
    catch(error){
        console.error("Error in conncecting" , error.message);
        process.exit(1);
    }
}
connectDB();
export default connectDB;