const express = require("express")
const {getStudentsOlder21, 
    getMJStudents, 
    getStudentsStartsWithA, 
    countStudentsByCourse, getStudentsAvgAgeByCourse,
    sortStudentsByAge, createIndexOnEmail,
    explainEmailQuery,createStudent, getStudentById
    } = require("../controllers/practiceController")

const authenticate = require("../middlewares/authMiddleware")

const router = express.Router();

router.get("/getStudentsOT21",authenticate, getStudentsOlder21)
router.get("/getMJStudents", getMJStudents)
router.get("/getStudentsStartsWithA", getStudentsStartsWithA)
router.get("/countStudentsByCourse", countStudentsByCourse)
router.get("/getStudentsAvgAgeByCourse", getStudentsAvgAgeByCourse)
router.get("/sortStudentsByAge", sortStudentsByAge)
router.get("/explainEmailQuery", explainEmailQuery)
router.get("/getStudentById/:id", getStudentById)

router.post("/createIndexOnEmail", createIndexOnEmail)
router.post("/createStudent", createStudent)

module.exports = router;