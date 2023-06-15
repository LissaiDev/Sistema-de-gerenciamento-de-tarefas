const isLogged = require( "../utils/isLogged");
const Team = require( "../models/Team");
const {validationResult} = require("express-validator");
module.exports = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({status: "error", errors: errors.array()})
    }
    if(isLogged(req)){
        try{
            const team = new Team({
                name: req.body.name,
                admin: isLogged(req).id,
                description: req.body.description,
                members: req?.body?.members || [isLogged(req).id]
            })
            team.save().then(team => {
                res.status(200).json({status: "success", data: team})
            })

        }catch(e){
            console.error(e);
            res.status(400).json({status: "error", errors: [{msg: e.message}]});
        }
    }else{
        res.status(401).json({status: "error", errors: [{msg: "Unauthorized"}]});
    }
}