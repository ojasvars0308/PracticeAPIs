const User = require("../models/userModel");

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

module.exports = { register };

