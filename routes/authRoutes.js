const express = require("express")

const { register, login, refreshAccessToken } = require("../controllers/authController")

const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.post("/refreshAccessToken", refreshAccessToken)

module.exports = router;