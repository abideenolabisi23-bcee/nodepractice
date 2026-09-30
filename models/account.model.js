const mongoose=require("mongoose")

const AccountSchema=new mongoose.Schema({
    accountNumber:{type:"String", required:true, unique:true}

},{timestamps:true, strict:"throw"})

const AccountModel = mongoose.model("Account", AccountSchema)

module.exports = AccountModel