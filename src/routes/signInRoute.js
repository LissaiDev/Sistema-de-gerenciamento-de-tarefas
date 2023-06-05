const express = require("express");
const router = express.Router();
const signIn = require("../controllers/signInController");
const signValidation = require("../utils/signValidation");

//Routes
router.post("/",signValidation,signIn);

//Export
module.exports = router;