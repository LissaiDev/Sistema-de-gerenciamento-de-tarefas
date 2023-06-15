const express = require("express");
const loginController = require("../controllers/loginController");
const loginValidation = require("../utils/loginValidation");
const isLoggedController = require("../controllers/isLoggedController");
const router = express.Router();
router.post("/", loginValidation ,loginController);
router.get("/", isLoggedController);
module.exports = router;