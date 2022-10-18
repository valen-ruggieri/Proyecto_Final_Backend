const router = require("express").Router();
const { logIn, signIn } = require("../../controllers/Users");
const cookieParser = require("cookie-parser");
const userValidation = require("../../utils/middlewares/userValidation");
router.use(cookieParser("secret"));
router.post("/signin", signIn);
router.post("/login", userValidation, logIn);
module.exports = router;
