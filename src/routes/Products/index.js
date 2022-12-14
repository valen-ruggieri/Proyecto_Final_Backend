const router = require("express").Router();
const {
  deleteProducts,
  getProducts,
  postProducts,
  putProducts,
  getProductById,
  getByCategory,
} = require("../../controllers/Products");
const authPermissions = require("../../utils/middlewares/authPermissions");
const productValidation = require("../../utils/middlewares/productValidation");
router.get("/", authPermissions, getProducts);
router.get("/:id", getProductById);
router.get("/category/:category", getByCategory);
router.post("/", productValidation, postProducts);
router.put("/:id", productValidation, putProducts);
router.delete("/:id", deleteProducts);
module.exports = router;
