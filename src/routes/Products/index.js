const router = require("express").Router();
const {
  deleteProducts,
  getProducts,
  postProducts,
  putProducts,
  getProductById,
} = require("../../controllers/Products");
router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", postProducts);
router.put("/:id", putProducts);
router.delete("/:id", deleteProducts);
module.exports = router;
