const express = require("express")

const { createCourse } = require("../controllers/courseController")

const router = express.Router();

router.post("/createCourse", createCourse)

module.exports = router;