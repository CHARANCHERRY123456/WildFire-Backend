import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import './config/db.js';
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT , ()=>{
    console.log(`server running on port ${PORT}`);
})

export default app;