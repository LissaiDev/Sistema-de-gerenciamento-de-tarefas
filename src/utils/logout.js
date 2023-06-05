const logout = (res)=>{
    res.cookie("token", "").json({message : "Logged out"})
}
module.exports = logout;