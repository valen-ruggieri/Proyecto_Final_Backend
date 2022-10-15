const router = require("express").Router();
const {
  deleteCarts,
  getCarts,
  postCarts,
  putCarts,
} = require("../../controllers/Carts");
router.get("/", getCarts);
router.post("/", postCarts);
router.put("/", putCarts);
router.delete("/", deleteCarts);
module.exports = router;
