const PracticeApi = require("../models/practiceModel")

exports.getStudentsOlder21 = async (req,res) => {
    try{
        //step1: use mongoose find() using query operator
        const students = await PracticeApi.find({ age: { $gt: 21 } })

        if(!students.length){
            res.status(404).json({ message: "No student is older than 21" })
        }

        //step2: if successful then send the data in json
        res.status(200).json({ 
            success: true, 
            message: "Student(s) found successfully", 
            count: students.length,
            students 
        })
    }catch(error){
        //step3: error handling
        console.log("Error in finding the students: ", error.message)
        res.status(500).json({ success: false, message: "Server issue" })
    }
}

exports.getMJStudents = async (req,res) => {
    try{
        const students = await PracticeApi.find({ course: { $in: ["MERN", "JAVA"] } })

        if(!students.length){
            res.status(404).json({ message: "No student is enrolled in MERN or JAVA" })
        }

        res.status(200).json({ 
            success: true, 
            message: "Student(s) found successfully", 
            count: students.length,
            students 
        })
    }catch(error){
        console.log("Error in finding the students: ", error.message)
        res.status(500).json({ success: false, message: "Server issue" })
    }
}

exports.getStudentsStartsWithA = async (req,res) => {
    try{
        const students = await PracticeApi.find({ name: { $regex: "^A", $options: "i" } })

        if(!students.length){
            res.status(404).json({ message: "No student name starts with A" })
        }

        res.status(200).json({ 
            success: true, 
            message: "Student(s) found successfully", 
            count: students.length,
            students 
        })
    }catch(error){
        console.log("Error in finding the students: ", error.message)
        res.status(500).json({ success: false, message: "Server issue" })
    }
}

exports.countStudentsByCourse = async (req,res) => {
    try{
        const courseCount = await PracticeApi.aggregate([
            {
                $group: {
                    _id: "$course",
                    count: { $sum: 1 }
                }
            },
            { $sort: { count: -1 } }
        ])

        if(!courseCount.length){
            res.status(404).json({ message: "No students found" })
        }

        res.status(200).json({ 
            success: true, 
            message: "Student count by course retrieved successfully", 
            courseCount 
        })
    }catch(error){
        console.log("Error in counting students by course: ", error.message)
        res.status(500).json({ success: false, message: "Server issue" })
    }
}

exports.getStudentsAvgAgeByCourse = async (req,res) => {
    try{
        const averageAges = await PracticeApi.aggregate([
            {
                $group: {
                    _id: "$course",
                    averageAge: { $avg: "$age" }
                }
            },
            { $sort: { averageAge: -1 } }
        ])

        if(!averageAges.length){
            res.status(404).json({ message: "No students found" })
        }

        res.status(200).json({ 
            success: true, 
            message: "Average age of students by course retrieved successfully", 
            averageAges 
        })
    }catch(error){
        console.log("Error in finding the average age of students by course: ", error.message)
        res.status(500).json({ success: false, message: "Server issue" })
    }
}

exports.sortStudentsByAge = async (req,res) => {
    try{
        const sortedStudents = await PracticeApi.find().sort({ age: 1 })

        res.status(200).json({
            success: true,
            message: "Students sorted by age retrieved successfully",
            sortedStudents
        })
    }catch(error){
        console.log("Error in sorting students by age: ", error.message)
        res.status(500).json({ success: false, message: "Server issue" })
    }
}