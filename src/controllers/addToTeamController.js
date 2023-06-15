const {validationResult} = require("express-validator");
const Team = require("../models/Team");
const isLogged = require("../utils/isLogged");
module.exports = async(req,res)=>{
    if(!isLogged()){
        return res.status(401).json({status: "error", message: "Sem permissão"});
    }
    const errors = validationResult(req);
    if(!errors.isEmpty()){
       return res.status(400).json({status: "error" , errors:errors.array()});
    }
    const {member, team: name} =req.body;
    const team =await Team.findOne({name});
    team.members.push(member);
    await team.save();
    res.status(200).json({status: "success", team});
}