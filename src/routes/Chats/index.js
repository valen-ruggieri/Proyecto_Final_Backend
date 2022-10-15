const router = require("express").Router();
const {
  deleteChats,
  getChats,
  postChats,
  putChats,
} = require("../../controllers/Chats");
router.get("/", getChats);
router.post("/", postChats);
router.put("/", putChats);
router.delete("/", deleteChats);
module.exports = router;
