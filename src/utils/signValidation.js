const { body } = require("express-validator");
const User = require("../models/User");
module.exports = [
  body("username")
    .notEmpty()
    .withMessage("Este é um campo obrigatório!")
    .custom(async (value) => {
      const user = await User.findOne({ username: value });
      if (user) {
        throw new Error("Username already exists");
      }
      return true;
    }),
  body("password")
    .notEmpty()
    .withMessage("Este é um campo obrigatório!")
    .isLength({ min: 6 })
    .withMessage("A senha deve conter mais de 6 caracteres!"),
];
