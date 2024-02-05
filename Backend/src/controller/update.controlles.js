import { User } from "../model/user.model.js";

 export const updateData=async(req,res)=>{
    try {
        const id= req.params.id;
        const dataExit= await User.findById(id);
        // console.log(dataExit)
        if(!dataExit){
           return res.status(401).json({
               message:"user is not find"
           })
        }
         const update= await User.findByIdAndUpdate(id,req.body,{new:true});
        //  console.log(update);
         res.status(200).json({
            user:update,
            message:"Update successful"
         });
         
    } catch (error) {
        res.status(500).json({
            error:error
        })
    }

 }
