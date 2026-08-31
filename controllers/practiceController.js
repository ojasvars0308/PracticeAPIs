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