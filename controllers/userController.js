// imort the models
import User from '../models/userModel.js';

// write the methods
export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const user = new User({ name, email, password });
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
export const oorke = (req , res)=>{
  res.send("Hi hellow");
}


