const isLogged = require("../utils/isLogged")

module.exports = (req,res)=>{
    if(isLogged(req)){
        res.cookie("token",null);
        res.json({message:"User logged out"})
    }else{
        res.status(401).json({message:"User not logged in"})
    }
}