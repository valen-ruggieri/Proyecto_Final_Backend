const router = require("express").Router();
const {
  deleteLogin,
  getLogin,
  postLogin,
  putLogin,
} = require("../../controllers/Login");
router.get("/", getLogin);
router.post("/", postLogin);
router.put("/", putLogin);
router.delete("/", deleteLogin);
module.exports = router;
