import app from './server.js';
import userRoute from './routes/userRoutes.js';

app.use("/api" , userRoute);

app.get("/" , (req , res)=>{
    res.send("Hi from index");
});