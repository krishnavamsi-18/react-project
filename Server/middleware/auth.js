const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
    //read the token from req cookies
    try{
    const {token} = req.cookies;
    if(!token){
        return res.status(401).send("Please Login....");
    }

    const decodedObj = await jwt.verify(token,"VISWA@ch$12323");

    const{_id} = decodedObj;

    const user = await User.findById(_id);
    if(!user){
        throw new Error("User not found");
    }
    req.user = user;
    next();
}catch(err){
    res.status(400).send("ERROR: " + err.message);
}
};

module.exports = {
    userAuth,
};