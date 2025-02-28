const mongoose = require("mongoose") ;
mongoose.connect("mongodb+srv://kartik:Ravan%400987@cluster0.q3hyd.mongodb.net/Paytm?retryWrites=true&w=majority&appName=Cluster0")
const userSchema = new mongoose.Schema({
    userName : String ,
    firstName : String ,
    lastName : String ,
    password : String 
}) ;
const User = mongoose.model('Users' , userSchema) ;
const AccountsSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'Users' 
    },
    balance : Number
}) ;
const Accounts = mongoose.model('Accounts' , AccountsSchema);
module.exports = {
    User ,
    Accounts
}
