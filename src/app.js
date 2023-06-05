//Requirements
require("dotenv").config();
const express = require("express");
const connectToDatabase = require("./config/database");
const SignIn = require("./routes/signInRoute");
const cookieParser = require("cookie-parser");
const login = require("./routes/loginRoute");

//Setting up express
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


//Connecting to database
connectToDatabase();

//Routes
app.use("/signin", SignIn);
app.use("/login", login)

//Listening
app.listen(8080,()=>{
    console.log("Listening on port 8080");
})