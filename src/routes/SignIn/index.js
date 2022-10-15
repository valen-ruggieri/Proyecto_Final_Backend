const router = require("express").Router();
const {
  deleteSignin,
  getSignin,
  postSignin,
  putSignin,
} = require("../../controllers/Signin");
router.get("/", getSignin);
router.post("/", postSignin);
router.put("/", putSignin);
router.delete("/", deleteSignin);
module.exports = router;
