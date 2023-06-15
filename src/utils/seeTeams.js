const isLogged = require("./isLogged");
const Team = require("../models/Team");
const seeTeams = async()=>{
    if(isLogged(req)){
        try{
            const teams = await Team.find({admin: isLogged().id});
            if(teams){
                res.status(200).json(teams);
            }else{
                res.status(404).json({
                    status: "error",
                    errors: [{msg: "No teams found"}]
                })
            }
        }catch(error){
            res.status(500).json({
                status: "error",
                errors: [{msg: error.message}]
            })
        }
    }else{
        res.status(401).json({
            status: "error",
            errors:[{msg: "Unauthorized"}]
        })
    }
}
module.exports = seeTeams;