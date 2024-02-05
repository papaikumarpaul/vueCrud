import { User } from "../model/user.model.js";
 export const  getoneData=async(req,res)=>{
    try {
        let  id= req.params.id;
        console.log(id);
        const userId=await User.findById(id);
        console.log(userId);
        if(!userId){
            return res.status(404).json({
                error: 'User not found'
            })
        }
         res.status(200).json(userId)
        
    } catch (error) {
       res.status(500).json({
        error:error
       }) 
    }
 }