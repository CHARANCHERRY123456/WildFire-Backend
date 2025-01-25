import express from "express";
const route = express.Router();
import {oorke} from '../controllers/userController.js'
// oorke();
// import methods from the userController
route.get("/oorke" , oorke);
// here comes the user routes like
// route.post('/register' , registerUser);
// .....

export default route;