const express = require("express")

const { createUser } = require("../controllers/userController")

const router = express.Router();
const authenticate = require("../middlewares/authMiddleware")

router.post("/createUser", authenticate, createUser)

module.exports = router;