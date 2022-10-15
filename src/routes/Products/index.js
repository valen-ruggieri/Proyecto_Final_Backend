const router = require("express").Router();
const {
  deleteProducts,
  getProducts,
  postProducts,
  putProducts,
} = require("../../controllers/Products");
router.get("/", getProducts);
router.post("/", postProducts);
router.put("/", putProducts);
router.delete("/", deleteProducts);
module.exports = router;
