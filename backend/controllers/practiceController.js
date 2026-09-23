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
        const order = req.query.order || "asc";

        let sortOrder;

        if(order === "asc"){
            sortOrder = 1
        }else if(order === "desc"){
            sortOrder = -1
        }else{
            return res.status(400).json({ success: false, message: "Invalid order parameter. Use 'asc' or 'desc'." })
        }

        const students = await PracticeApi.find().sort({ age: sortOrder })
        
        res.status(200).json({ 
            success: true, 
            message: "Students sorted by age successfully", 
            students 
        })
    }catch(error){
        console.log("Error in sorting students by age: ", error.message)
        res.status(500).json({ success: false, message: "Server issue" })
    }
}

exports.getStudentById = async (req,res) => {
    try{
        const { id } = req.params;

        const student = await PracticeApi.findById(id)

        if(!student){
            return res.status(404).json({ success: false, message: "Student not found" })
        }

        res.status(200).json({ 
            success: true, 
            message: "Student retrieved successfully", 
            student 
        })
    }catch(error){
        console.log("Error in retrieving student by ID: ", error.message)
        res.status(500).json({ success: false, message: "Server issue" })
    }
}   

exports.createStudent = async (req,res) => {
    try{
        const { name, age, course, email, branch } = req.body;

        if(!name || !age || !course || !email || !branch){
            return res.status(400).json({ 
                success: false, 
                message: "All fields (name, age, course, email) are required" 
            })
        }

        const newStudent = await PracticeApi.create({ name, age, course, email, branch });
        res.status(201).json({ 
            success: true, 
            message: "Student created successfully", 
            student: newStudent 
        })
    }catch(error){
        console.log("Error in creating student: ", error.message)
        res.status(500).json({ success: false, message: "Server issue" })
    }   
}

exports.createIndexOnEmail = async (req,res) => {
    try{
        const index = await PracticeApi.collection.createIndex({ email: 1 }, { unique: true })

        res.status(201).json({ 
            success: true, 
            message: "Index created successfully", 
            index 
        })
    }catch(error){
        console.log("Error in creating index on email: ", error.message)
        res.status(500).json({ success: false, message: "Server issue" })
    }
}

exports.explainEmailQuery = async (req,res) => {
    try{
        const { email } = req.query;
        if(!email){
            return res.status(400).json({ 
                success: false, 
                message: "Email query parameter is required" 
            })
        }

        const explainResult = await PracticeApi.collection.find({ email: email }).explain("executionStats");
        
        res.status(200).json({
            success: true,
            message: "Query explanation retrieved successfully",
            explainResult
        })
    }catch(error){
        console.log("Error in explaining email query: ", error.message)
        res.status(500).json({ success: false, message: "Server issue" })
    }
}