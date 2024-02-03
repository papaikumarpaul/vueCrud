import { User } from "../model/user.model.js";

 export  const Deleted=async (req,res)=>{
    try {
         const id= req.params.id;
         const deleted=await User.findById(id);
         if(!deleted){
            return res.status(404).json({
                message:"user is not found"
            })
         }
           const del= await User.findByIdAndDelete(id,res.body);
           console.log(del);
           res.status(200).json({
            message:"sucessFull Deleted"
           })
        
    } catch (error) {
        res.status(500).json({
            error:error
        })
    }
 }