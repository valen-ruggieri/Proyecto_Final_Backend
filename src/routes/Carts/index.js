const router = require("express").Router();
const {
  getCarts,
  postCarts,
  addProductInCart,
  deleteAllProducts,
  deleteProductInCart,
  deleteCarts,
} = require("../../controllers/Carts");

router.get("/:id", getCarts);
router.post("/", postCarts);
router.post("/product/add", addProductInCart);
router.delete("/:id", deleteCarts);
router.delete("/deleteAll", deleteAllProducts);
router.delete("/product/delete", deleteProductInCart);
module.exports = router;
