const JWT_SECRET = require("../config");
const { User } = require("../dataBase");
const jwt = require("jsonwebtoken")
const isAvailable = async (req , res , next) => {
    const userName = req.body.userName ;
    const doesExist = await User.findOne({
        userName : userName
    })
    if(!doesExist){
        next() ;
    }
    else{
        res.send({
            message : "UserName is Not Available"
        });
    }
}
const authUser = async (req , res , next) => {
    const user = req.body ;
    const doesExist = await User.findOne({
        userName : user.userName ,
        password : user.password
    }) ;
    if(doesExist){
        next() ;
    }
    else{
        res.send({
            message : "No Such User Exists"
        })
    }
}
const authMiddleware = async (req , res , next) => {
    let token = req.headers.authorization ;
    if(!token.startsWith('Bearer ')){
        res.status(403).send({
            message : "Invalid Access"
        }) ;
    }
    token = token.split(" ")[1] ;
    const verify = jwt.verify(token , JWT_SECRET) ;
    if(verify){
        const user = await User.findOne({
            userName : verify.userName 
        }) ;
        const id = user._id ;
        req.userId = id ;
        req.Name = user.firstName ;
        next() ;
    }
    else{
        res.status(403).send({
            message : "Invalid Access"
        })
    }
}
module.exports = {
    isAvailable ,
    authUser ,
    authMiddleware
}