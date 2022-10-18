const User = require("../../models/Users");
const jwt = require("jsonwebtoken");
const { secret } = require("../../utils/token/index");
const { sendMailWelcome } = require("../../utils/mail");
const comparePassword = require("../../models/Users/bcrypt");

const logIn = async (req, res) => {
  const { userName, email, password, confirmPassword, phone } = req.body;
  const userExist = await User.find({ email: email });
  const verifyEmail = userExist[0] ? userExist[0].email : null;
  if (verifyEmail !== email) {
    if (password == confirmPassword) {
      const user = new User({ userName, email, password, phone });
      user.password = await user.encrypt(user.password);
      const response = await User.create(user);
      const tokenAuth = jwt.sign({ idUser: response._id }, secret, {
        expiresIn: 60 * 60 * 24,
      });
      res.cookie("tokenAuth", tokenAuth, { signed: true });
      sendMailWelcome(userName, email, phone);
      return res.redirect("/products");
    }
  } else {
    return res.json({ message: "email ya existente" });
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.find({ email: email });
  if (user[0].password) {
    const succesPass = await comparePassword(password, user[0].password);
    if (succesPass) {
      const tokenAuth = jwt.sign({ idUser: User._id }, secret, {
        expiresIn: 60 * 60 * 24,
      });
      res.cookie("tokenAuth", tokenAuth, { signed: true });
      return res.redirect("/products");
    }
  }
  res.json({ message: "no exite la sesion que quieres iniciar" });
};

const logOut = async (req, res) => {
  res.cookie("tokenAuth", "", { signed: true });
  res.json({ message: "logOut in session" });
};
module.exports = { signIn, logIn, logOut };
