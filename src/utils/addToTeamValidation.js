const { body } = require("express-validator");
const User = require("../models/User");
const Team = require("../models/Team");
const isLogged = require("./isLogged");
module.exports = [
  body("member")
    .not()
    .isEmpty()
    .withMessage("Este é um campo obrigatório!")
    .custom(async (value) => {
      const user = await User.findOne({ _id: value });
      if (!user) {
        throw new Error("Usuário não existente");
      }
      return true;
    }),
  body("team")
    .not()
    .isEmpty()
    .withMessage("Este é um campo obrigatório!")
    .custom(async (value, {req}) => {
      const team = await Team.findOne({ name: value });
      if (!team) {
        throw new Error("Team não existente");
      }
      if(team.admin !== isLogged(req)?.id) {
        throw new Error("Sem permissão");
      }
      return true;
    }),
];
