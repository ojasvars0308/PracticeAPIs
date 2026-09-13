const User = require("../models/userModel")

exports.createUser = async (req,res) => {
    try{
        const { name, email, password, role } = req.body;

        if(!name || !email || !password || !role){
            return res.status(400).json({ message: "Please provide all required fields" })
        }

        const newUser = await User.create({ name, email, password, role })

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user: newUser
        })
    }catch(error){
        if(error.name === "ValidationError"){
            return res.status(400).json({ success: false, message: error.message })
        }
        console.log("Error in creating user: ", error.message)
        res.status(500).json({ success: false, message: "Server issue" })
    }
}   