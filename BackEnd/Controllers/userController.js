const User = require("../models/User");
const jwt = require("jsonwebtoken");

const getUsers = async (request, response) => {
  try {
    const users = await User.find();
    if (users && users.length > 0) {
      response.status(200).json({ users: users });
    } else {
      response.status(404).json({ msg: "No users found" });
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ msg: "Error on getting users" });
  }
};
const signup = async (request, response) => {
    const { name, email, password } = request.body;
    
    try {
        const foundUser = await User.findOne({ email: email });
        if (foundUser) {
            return response.status(400).json({ msg: "User already exists" });
        }
        
        const newUser = new User({ name, email, password });
        await newUser.save();
        
        const token = jwt.sign(
            { userId: newUser._id, email: newUser.email, role: newUser.role },
            process.env.JWT_SECRET || "your-secret-key",
            { expiresIn: "7d" }
        );
        
        response.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });
        
        response.status(200).json({ 
            msg: "User successfully registered",
            user: { id: newUser._id, name: newUser.name, email: newUser.email, role: newUser.role }
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({ msg: "Error on signup" });
    }
};

const signin = async (request, response) => {
    const { email, password } = request.body;
    
    try {
        const foundUser = await User.findOne({ email: email });
        if (!foundUser) {
            return response.status(404).json({ msg: "User not found" });
        }
        
        if (foundUser.password !== password) {
            return response.status(401).json({ msg: "Invalid password" });
        }
        
        const token = jwt.sign(
            { userId: foundUser._id, email: foundUser.email, role: foundUser.role },
            process.env.JWT_SECRET || "your-secret-key",
            { expiresIn: "7d" }
        );
        
        response.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });
        
        response.status(200).json({ 
            msg: "Sign in successful",
            user: { id: foundUser._id, name: foundUser.name, email: foundUser.email, role: foundUser.role }
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({ msg: "Error on signin" });
    }
};

const signout = async (request, response) => {
    response.clearCookie('token');
    response.status(200).json({ msg: "Sign out successful" });
};

module.exports = { signup, signin, signout ,getUsers };

