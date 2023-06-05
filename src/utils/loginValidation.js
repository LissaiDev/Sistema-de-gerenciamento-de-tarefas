const { body } = require("express-validator");
const User = require("../models/User");
module.exports = [
  body("username")
    .notEmpty()
    .withMessage("Este é um campo obrigatório!")
    .custom(async (value) => {
      const user = await User.findOne({ username: value });
      if (!user) {
        throw new Error("Usuário não existente");
      }
      return true;
    }),
  body("password")
    .notEmpty()
    .withMessage("Este é um campo obrigatório!")
];
