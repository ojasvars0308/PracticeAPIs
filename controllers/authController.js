const User = require("../models/userModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { generateAccessToken, generateRefreshToken} = require("../utils/tokenUtils")

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email and password are required"
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User with this email already exists"
      });
    }

    const user = await User.create({ name, email, password });

    res.status(201).json({
      success: true,
      message: "Registration successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    if(error.name === "ValidationError"){
        return res.status(400).json({ success: false, message: error.message })
    }

    console.error(error);
    
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

const login = async(req,res) => {
  try{
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: "Email and password are required" 
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ 
        success: false, 
        message: "User with this email not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ 
        success: false, 
        message: "Invalid password" 
      });
    }

    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user)

    res.status(200).json({
      success: true,
      message: "Login successful",
      accessToken,
      refreshToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    })

  }catch(err){
    console.error(err);
    res.status(500).json({ 
      success: false, 
      message: "Internal server error" 
    });
  }
}

const refreshAccessToken = async(req,res) => {
  try{
    const {refreshToken} = req.body;

    if (!refreshToken) {
      return res.status(401).json({ 
        success: false, 
        message: "Refresh token is required" 
      });
    }

    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

    const user = await User.findById(decoded.userId);

    if(!user){
      return res.status(401).json({ 
        success: false, 
        message: "User no longer exists" 
      });
    }

    const newAccessToken = generateAccessToken(user);

    res.status(200).json({ 
      success: true, 
      accessToken: newAccessToken 
    });

  }catch(err){
    console.error(err);

    res.status(401).json({ 
      success: false, 
      message: "Invalid or expired refresh token" 
    });

    res.status(500).json({ 
      success: false, 
      message: "Internal server error" 
    });
  }
}

module.exports = { register, login, refreshAccessToken };

