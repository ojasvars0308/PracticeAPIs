const express = require("express")
const bcrypt = require("bcrypt")
const connectDB = require("./config/db")
const practiceRs = require("./routes/practiceRoute")
const courseRs = require("./routes/courseRoutes")
const userRs = require("./routes/userRoute")
const authRs = require("./routes/authRoutes")

require("dotenv").config()

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use("/practice", practiceRs)
app.use("/course", courseRs)
app.use("/user", userRs)
app.use("/auth", authRs)

app.get("/", (req, res) => {
    res.send("Welcome to the API Practice Project")
})

app.use((req, res) => {
    res.status(404).json({ message: "Route not found or misspelled" })
})

// async function hashPassword(password) {
//     try {
//         const hashedPassword = await bcrypt.hash(password, 10);
//         return hashedPassword;
//     } catch (error) {
//         console.error("Error hashing password:", error);
//         throw error;
//     }   
// }

// function main() {
//     const password = "123456";
//     hashPassword(password)
//         .then((hashedPassword) => {
//             console.log("Hashed Password:", hashedPassword);
//         })
//         .catch((error) => {
//             console.error("Error:", error);
//         });
// }

// function comparePassword(plainPassword, hashedPassword) {
//     bcrypt.compare(plainPassword, hashedPassword)
//         .then((isMatch) => {
//             if (isMatch) {
//                 console.log("Password matches!");
//             } else {
//                 console.log("Password does not match.");
//             }
//         })
//         .catch((error) => {
//             console.error("Error comparing passwords:", error);
//         });
// }

// comparePassword("123456", "$2b$10$7Q1Z5F1J8")

// main();

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})

connectDB()