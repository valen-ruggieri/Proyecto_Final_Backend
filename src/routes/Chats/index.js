const router = require("express").Router();
const {
  deleteChats,
  postChats,
  deleteMessages,
  addMessage,
  getChatsById,
} = require("../../controllers/Chats");
router.get("/:id", getChatsById);
router.post("/", postChats);
router.post("/messages/add", addMessage);
router.delete("/messages/delete", deleteMessages);
router.delete("/:id", deleteChats);
module.exports = router;
