const authorize = (...allowedRoles) => {
  return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ 
                success: false, 
                message: "Authentication required" 
            });
        }

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: "You do not have permission to access this route"
            });
        }

        next();
    };
};

module.exports = authorize;