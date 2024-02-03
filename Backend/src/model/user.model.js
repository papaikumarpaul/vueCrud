import mongoose from "mongoose";

 const userSchame=  new mongoose.Schema({
    fullname:{
     type:String,
     require:true
    },
    email:{
type:String,
require:[true,"Please provide your Email"] ,
unique: true
    },
    password :{
        type: String,
        require: [true, 'Password is required'],
        minlength: [6,'Your Password must be at least 6 characters'],
    }
 })

  export const  User = mongoose.model("user",userSchame);