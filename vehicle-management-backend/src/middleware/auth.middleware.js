const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // Expect: Bearer <token>
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Authorization token missing" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // attach user info to request
    req.user = decoded; // { userId, email, iat, exp }

    next(); // go to controller
  } catch (err) {
    console.error("JWT error:", err.message);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

module.exports = authenticate;
