const express = require("express")
const connectDB = require("./config/db")
const practiceRs = require("./routes/practiceRoute")

require("dotenv").config()

const app = express();

app.use(express.json());

app.use("/practice", practiceRs)

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})

connectDB()