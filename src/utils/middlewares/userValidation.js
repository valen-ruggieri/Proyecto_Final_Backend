const userschema = require("../schemas/userSchema");

const userValidation = async (req, res, next) => {
  const body = req.body;
  try {
    await userschema.validate(body);
    next();
  } catch (error) {
    res.send(error.message);
    console.log(error);
  }
};

module.exports = userValidation;
