 import { User } from "../model/user.model.js";

  
 export const creacted=async(req,res)=>{
    try {
        const userData=   new User(req.body);
        console.log(userData)
        if(!userData){
            return res.status(404).json({
                message:"user is not found"
            })
        }
      const saveData=  await userData.save();
      res.status(200).json(saveData);

    } catch (error) {
        res.status(500).json({
            error:error
        })
    }
 }
 
