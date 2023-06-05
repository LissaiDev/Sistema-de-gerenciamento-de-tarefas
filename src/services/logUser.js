const User = require("../models/User");
const { compare } = require("./hash");
const jwt = require("jsonwebtoken");
const logUser = async ({ username, password }, res) => {
  const user = await User.findOne({ username });
  const isMatch = compare(password, user.password);
  if (isMatch) {
    console.log("matches");
    const token = jwt.sign(
      {
        username: user.username,
        id: user._id,
      },
      process.env.JWT_SECRET
    );
    res.cookie("token", token).json({ token });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
};
module.exports = logUser;
