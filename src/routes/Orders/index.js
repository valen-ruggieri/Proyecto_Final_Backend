const {
  getOrderByEmail,
  deleteOrder,
  postOrder,
} = require("../../controllers/Orders");

const router = require("express").Router();

router.get("/:email", getOrderByEmail);
router.post("/", postOrder);
router.delete("/", deleteOrder);

module.exports = router;
