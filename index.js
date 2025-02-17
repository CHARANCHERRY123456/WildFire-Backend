import express from 'express';
import connectDB from './config/db.js';
import { PORT } from './config/config.js';
import router from './routes/index.js';
connectDB();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

