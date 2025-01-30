import express from 'express';
import connectDB from './config/db.js';
import { PORT } from './config/config.js';
import router from './routes/index.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
    connectDB();
})