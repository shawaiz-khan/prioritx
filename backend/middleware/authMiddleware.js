const jwt = require("jsonwebtoken");
const User = require("../models/Users");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  const token = authHeader.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, "your_jwt_secret");
    if (typeof decoded !== "string" && decoded.id) {
      req.user = await User.findById(decoded.id);
    } else {
      return res.status(401).json({ message: "Token is not valid" });
    }
    if (!req.user) {
      return res
        .status(401)
        .json({ message: "User not found, authorization denied" });
    }
    next();
  } catch (err) {
    console.error("Token error:", err);
    res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = authMiddleware;
