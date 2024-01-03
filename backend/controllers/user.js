import User from '../models/User.js';

export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.find({
      name: req.body.name,
      password: req.body.password,
      
    });
    if(!user){
      res.status(404).json({message:"User not found"})
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
