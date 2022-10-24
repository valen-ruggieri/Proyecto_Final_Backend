const router = require("express").Router();
const {
  postChats,
  deleteMessages,
  addMessage,
  getChatsByEmail,
  getAllChats,
} = require("../../controllers/Chats");
router.get("/", getAllChats);
router.get("/:email", getChatsByEmail);
router.post("/", postChats);
router.post("/messages/add", addMessage);
router.delete("/messages/delete", deleteMessages);
module.exports = router;
