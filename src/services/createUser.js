const User = require("../models/User");
const { hash } = require("./hash");
const jwt = require("jsonwebtoken");
const createUser = async ({ username, password }, res) => {
  try {
    const user = new User({ username, password: hash(password) });
    await user.save();
    const token = jwt.sign({ username, id: user._id }, process.env.JWT_SECRET);
    res.cookie("token", token).json({
      username,
      id: user._id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = createUser;
