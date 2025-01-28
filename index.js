import app from './server.js';
import userRoute from './routes/userRoutes.js';
import habitRouter from './routes/habitRoute.js';

app.use("/api/user" , userRoute);
app.use("/api/habit" , habitRouter);

