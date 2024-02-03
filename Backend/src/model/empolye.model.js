import mongoose from "mongoose";

const EmployeSchame= new mongoose.Schema({
fullName:{
    type:String,
    require:true
}
,
email:{
    type:String,
    require:true
}
,
password:{
    type:String,
    require:true 
}
 }) 
export const Employe= mongoose.model("employe",EmployeSchame);