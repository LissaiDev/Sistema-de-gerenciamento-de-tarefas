const { body } = require("express-validator");
const User = require("../models/User");
const Team = require("../models/Team");
const isLogged = require("./isLogged");
module.exports = [
  body("title").not().isEmpty().withMessage("Este é um campo obrigatório!"),
  body("description")
    .not()
    .isEmpty()
    .withMessage("Este é um campo obrigatório!"),
  body("date")
    .not()
    .isDate()
    .withMessage("Este é um campo obrigatório!")
    .not()
    .isEmpty()
    .withMessage("Este é um campo obrigatório!"),
  body("responsable")
    .not()
    .isEmpty()
    .withMessage("Este é um campo obrigatório!")
    .custom(async (value, { req }) => {
      const user = await User.findOne({ _id: value });
      const team = await Team.findOne({
        _id: req.body.team,
      })
      const isPartOfTeam = team.members.includes(value);
      console.log(isPartOfTeam);
      console.log(user);
      if (user && isPartOfTeam) {
        return true;
      }
      throw new Error("Usuário não existente");
    }),
  body("team")
    .not()
    .isEmpty()
    .withMessage("Este é um campo obrigatório!")
    .custom(async (value, { req }) => {
      const team = await Team.findOne({ _id: value });
      if (!team) {
        throw new Error("Team não existente");
      }
      console.log(team.admin);
      console.log(isLogged(req));
      if (team.admin !== isLogged(req)?.id) {
        throw new Error("Você não tem previlégios de administrador");
      }
      return true;
    }),
];
