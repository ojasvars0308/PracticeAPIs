const express = require("express")
const {getStudentsOlder21, getMJStudents, getStudentsStartsWithA, countStudentsByCourse, getStudentsAvgAgeByCourse, sortStudentsByAge} = require("../controllers/practiceController")

const router = express.Router();

router.get("/getStudentsOT21", getStudentsOlder21)
router.get("/getMJStudents", getMJStudents)
router.get("/getStudentsStartsWithA", getStudentsStartsWithA)
router.get("/countStudentsByCourse", countStudentsByCourse)
router.get("/getStudentsAvgAgeByCourse", getStudentsAvgAgeByCourse)
router.get("/sortStudentsByAge", sortStudentsByAge)

module.exports = router;