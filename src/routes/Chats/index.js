const router = require("express").Router();
const {
  deleteChats,
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
router.delete("/:id", deleteChats);
module.exports = router;
