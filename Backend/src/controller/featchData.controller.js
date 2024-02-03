
 import { User } from "../model/user.model.js";

 export const getAllData=async(req,res)=>{
    try {
        const data= await User.find();
        if(!data)
        return res.status(404).json({
    message:"data is not available"

    })
    res.status(200).json(data)
        
    } catch (error) {
        res.status(500).json({
            error:error
        })
    }
 }

 