const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectToDatabase = () => {
  mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost/tasksService", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Sucessfully connected to database"))
    .catch((err) => console.error(err));
};
module.exports = connectToDatabase;