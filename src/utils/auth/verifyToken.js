const jwt = require("jsonwebtoken");
const { secret } = require("../token/index");

const verifyToken = (req) => {
  const tokenAuth = req.signedCookies.tokenAuth;
  const tokenVerify = jwt.verify(tokenAuth, secret);
  return tokenVerify;
};
module.exports = verifyToken;
