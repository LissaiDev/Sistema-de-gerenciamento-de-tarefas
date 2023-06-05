const express = require("express");
const loginController = require("../controllers/loginController");
const loginValidation = require("../utils/loginValidation");
const router = express.Router();

router.post("/", loginValidation ,loginController);

module.exports = router;