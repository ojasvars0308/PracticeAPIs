const Course = require("../models/courseModel")

exports.createCourse = async (req,res) => {
    try{
        const { name, duration, teacher } = req.body;

        if(!name || !duration || !teacher){
            return res.status(400).json({ message: "Please provide all required fields" })
        }

        const newCourse = await Course.create({ name, duration, teacher })

        res.status(201).json({
            success: true,
            message: "Course created successfully",
            course: newCourse
        })
    }catch(error){
        if(error.name === "ValidationError"){
            return res.status(400).json({ success: false, message: error.message })
        }
        console.log("Error in creating course: ", error.message)
        res.status(500).json({ success: false, message: "Server issue" })
    }
}   