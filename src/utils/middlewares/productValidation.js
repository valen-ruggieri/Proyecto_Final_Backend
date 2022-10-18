const productSchema = require("../schemas/productSchema");

const productValidation = async (req, res, next) => {
  const body = req.body;
  try {
    await productSchema.validate(body);
    next();
  } catch (error) {
    res.send(error.message);
    console.log(error);
  }
};

module.exports = productValidation;
