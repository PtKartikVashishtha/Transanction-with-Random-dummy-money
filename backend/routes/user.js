const express = require("express") ;
const authUser = require("../middlewares/authUser");
const schema = require("../Validation/Valid");
const { User, Accounts } = require("../dataBase");
const jwt = require("jsonwebtoken") ;
const JWT_SECRET = require("../config");
const checkSchemaForUpdation = require("../middlewares/checkschemaForValidation");

const router = express.Router() ;

router.post('/signup' , authUser.isAvailable , async (req , res) => {
    const userData = req.body ;
    const name = userData.userName ;
    const Schema = schema ;
    const response = Schema.safeParse(userData) ;
    if(response.success){
        {
            const user = await User.create(userData) ;
            const token = jwt.sign({userName : name} , JWT_SECRET) ;
            const id = user._id ;
            const num = Math.floor((Math.random()*10000) % 10000)
            await Accounts.create({
                userId : id ,
                balance : num ,
            })
            res.send({
                message : "Signed Up SucessFully" ,
                jwt : token
            })
        }
    }
    else{
        res.send({
            message : "invalid format of data"
        })
    }
})
router.post('/signin' , authUser.authUser , async (req , res) => {
    try{
        username = req.body.userName ;
        const token = jwt.sign({userName : username} , JWT_SECRET) ;
        res.send({
            jwt : token ,
            message : "Signed in successfully"
        })
    }
    catch(e){
        console.log(e) ;
        res.send({
            message: "Error while logging in"
        })
    }
}) ;
router.put('/', checkSchemaForUpdation , authUser.authMiddleware , async (req , res) => {
    try{
        const id = req.userId ;
        const data = req.body ;
        await User.updateOne({
            _id : id
        } , {
            $set:{
                password : data.password , 
                firstName : data.firstName ,
                lastName : data.lastName
            }
        }) ;
        res.send({
            message : "updated sucessfully"
        })
    }
    catch(e){
        res.status(411).send({
            message: "Error while updating information"
        }) ;
    }
}) ;
router.get('/bulk' , authUser.authMiddleware , async (req , res) => {
    const name = req.query.filter ;
    let names = await User.find({
        $or : [{
            firstName : {
                $regex : name
            }
        } , {
            lastName : {
                $regex : name
            }
        }]
    }) ;
    names = names.map((name) => {
        return {
            firstName : name.firstName , 
		    lastName : name.lastName ,
            userName : name.userName ,
            _id : name._id 
        }
    }) ;
    if(names.length <= 0){
        res.send({
            message : "NO Such User Exists" ,
            users : []
        })
        return ;
    }
    res.send({
        users : names
    }) ;
})
router.get('/name' , authUser.authMiddleware , (req , res) => {
    const name = req.Name 
    res.send({
        name : name
    })
})
module.exports = router ;