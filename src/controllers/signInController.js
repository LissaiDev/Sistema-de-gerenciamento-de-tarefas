const {validationResult}= require("express-validator");
const createUser = require("../services/createUser");
const signIn = (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors.array())
        res.status(400).json({
            errors: errors.array()
        })
    }else{
        createUser(req.body, res);
    }
    
    
}
module.exports = signIn;