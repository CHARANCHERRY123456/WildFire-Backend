import mongoose from "mongoose";
import { MONGO_URI } from "../config/config.js";

const connectDB = async () => {
    try{
        await mongoose.connect(MONGO_URI);
        console.log("MongoDb connected");
    }
    catch(error){
        console.error("Error in conncecting" , error.message);
        process.exit(1);
    }
}

export default connectDB;