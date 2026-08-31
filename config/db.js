const mongoose = require("mongoose")

async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected")
    }catch(error){
        console.log("MongoDB connection error", error)
    }
}

module.exports = connectDB;