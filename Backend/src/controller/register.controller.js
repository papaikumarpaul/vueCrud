import { Employe } from "../model/empolye.model.js";


 export const Register=async(req,res)=>{
try {
    const us =req.body;
    const user= await Employe.create(us);
    // console.log(user);
    if(!user.fullName || !user.email || !user.password){
        return res.status(400).send({message:"please fill all fields"});
    }
     res.status(200).json(({
        data:user,
        message:"Register successfully"
     }));
   

} catch (error) {
    res.status(500).json({
        error:error
    })
}
}