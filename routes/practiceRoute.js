const express = require("express")
const {getStudentsOlder21} = require("../controllers/practiceController")

const router = express.Router();

router.get("/getStudentsOT21", getStudentsOlder21)

module.exports = router;