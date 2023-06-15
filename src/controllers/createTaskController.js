const Tasks = require("../models/Tasks");
const isLogged = require("../utils/isLogged");
const {validationResult} = require("express-validator");
module.exports = async(req,res)=>{
    const errors = validationResult(req);
    if(!isLogged(req)){
        return res.status(401).json({status: "error", message: "Unauthorized"});
    }
   if(!errors.isEmpty()){
       return res.status(400).json({status: "error" , errors:errors.array()});
   }
   const {title, description, date, responsable, team} = req.body;
   try{
       const task = new Tasks({title, description, date, responsable, team});
       await task.save();
       res.status(200).json({status: "success", task});
   }catch(error){
       res.status(500).json({status: "error", errors: [{msg: error.message}]});
   }
}