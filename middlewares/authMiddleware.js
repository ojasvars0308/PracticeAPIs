const jwt = require("jsonwebtoken")

const authenticate = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
    return res.status(401).json({ 
        success: false, 
        message: "Authorization header is required" });
  }

  const parts = authHeader.split(" ");

  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return res.status(401).json({ 
        success: false, 
        message: "Invalid authorization format" 
    });
  }

  const token = parts[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {

    console.error(error)

    return res.status(401).json({ 
        success: false, 
        message: "Invalid or expired token" });
  }
}

module.exports = authenticate;