const User = require("../../models/Users");
const jwt = require("jsonwebtoken");
const { secret } = require("../../utils/token/index");
const { sendMailWelcome } = require("../../utils/mail");
const comparePassword = require("../../models/Users/bcrypt");

const logIn = async (req, res) => {
  const { userName, email, password, confirmPassword, phone } = req.body;
  if (password == confirmPassword) {
    const user = new User({ userName, email, password, phone });
    user.password = await user.encrypt(user.password);
    const response = await User.create(user);
    const tokenAuth = jwt.sign({ idUser: response._id }, secret, {
      expiresIn: 60 * 60 * 24,
    });
    res.cookie("tokenAuth", tokenAuth, { signed: true });
    sendMailWelcome(userName, email, phone);
    return res.send({ response, tokenAuth });
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.find({ email: email });
  if (user[0].password) {
    const succesPass = await comparePassword(password, user[0].password);
    if (req.signedCookies.tokenAuth && succesPass) {
      const tokenAuth = req.signedCookies.tokenAuth;
      const tokenVerify = jwt.verify(tokenAuth, secret);
      return res.send({ user, tokenVerify });
    } else {
      return res.json({ message: "la contrasena proporcionada no es igual" });
    }
  }
  res.json({ message: "no has provisto de un token" });
};

module.exports = { signIn, logIn };
