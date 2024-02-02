import mongoose from "mongoose";
import { DB_name } from "../constants.js";

 const connectionDB= async()=>{
try {
    const connectionb =await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`);
    console.log(`mongoDb connection${connectionb.connection.host}`)
} catch (error) {
    console.log(`connection failed: ${error.message}`)
    process.exit(1)
    
}

 }
 export default connectionDB;
