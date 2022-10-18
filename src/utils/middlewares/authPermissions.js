const verifyToken = require("../auth/verifyToken");

const authPermissions = async (req, res, next) => {
  try {
    verifyToken(req);
    next();
  } catch (error) {
    res.json({ message: "token invalid, permissions denied" });
  }
};

module.exports = authPermissions;
