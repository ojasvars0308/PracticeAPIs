const mongoose = require("mongoose")

const practiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 30,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 23,
    },
    course: {
        type: String,
        required: true,
        enum: ["JAVA", "Python", "AWS", "GCP", "MERN"]
    },
    branch: {
        type: String,
        required: true,
        enum: ["CSE", "ECE", "EE", "ME", "CE", "AIML"]
    }
}
)

const PracticeApi = mongoose.model("PracticeApi", practiceSchema);

module.exports = PracticeApi;