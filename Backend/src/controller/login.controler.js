import { Employe } from "../model/empolye.model.js";
 export const login= async(req,res)=>{
try {
      const  {email,password}=req.body;
      const user= await Employe.findOne({email:email});
    //   console.log(user);
      if(!user.email || !user.password){
        return res.status(404).json({
            message:"please enter valid email and password"
        })
      }else{
        if(user.password===password){
            res.status(200).json({
                message:"sucessFully"
            })
                   }else{
                    res.status(404).json({
                        message:"invalid password"
                    })
                   }
      }
       
      
} catch (error) {
    res.status(500).json({
        message: error.message
    })
}
 }