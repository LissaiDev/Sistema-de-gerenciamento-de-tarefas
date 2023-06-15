const isLogged = require("../utils/isLogged");
module.exports = (req,res)=>{
    if(isLogged(req)){
        res.status(200).json({message:"ok", info: isLogged(req)});
    }else{
        res.status(401).json({message:"no"});
    }
}