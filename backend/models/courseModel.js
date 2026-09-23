const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    duration: {
        type: String,
        required: true,
        trim: true
    },
    teacher: {
        type: String,
        required: true,
        trim: true
    }
}
)

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;