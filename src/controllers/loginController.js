const {validationResult} = require("express-validator");
const logUser = require("../services/logUser");
const loginController = (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({
            errors: errors.array()
        })
    }else{
        logUser(req.body, res);
    }
}

module.exports = loginController;