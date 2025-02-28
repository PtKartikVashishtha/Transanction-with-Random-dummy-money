const express = require("express") ;
const mongoose = require("mongoose") ;
const { authMiddleware } = require("../middlewares/authUser");
const { Accounts, User } = require("../dataBase");

const router = express.Router() ;

router.get('/balance' , authMiddleware , async (req , res) => {
    try{
        const userId = req.userId ;
        const user = await Accounts.findOne({
            userId : userId 
        }) ;
        res.send({
            balance : user.balance
        });
    }
    catch(e){
        res.send("Error occured") ;
    }
}) ;
router.post('/transfer' , authMiddleware , async (req , res) => {
    const session =  await mongoose.startSession() ;
    session.startTransaction() ;
    const senderId = req.userId ;
    const reciverDetails = req.body ;
    const reciverId = reciverDetails.to ;
    const amount = reciverDetails.amount ;
    const sender = await Accounts.findOne({
        userId : senderId 
    }).session(session) ;
    if(sender.balance < amount){
        await session.abortTransaction() ;
        res.send({
            message : "insufficeint balance"
        }) ;
        return ;
    }
    const reciver = await Accounts.findOne({
        userId : reciverId 
    }).session(session) ;
    if(!reciver){
        await session.abortTransaction() ;
        return res.send({
            message : "Invalid User"
        }) ;
    }
    await Accounts.updateOne({
        userId : senderId
    } , {
        $inc : {
            balance : -amount
        }
    }).session(session) ;
    await Accounts.updateOne({
        userId : reciverId
    } , {
        $inc : {
            balance : amount
        }
    }).session(session) ;
    await session.commitTransaction() ;
    res.send({
        message : "transfer successful"
    })
})

module.exports = router ;