import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

 const connectionDB= async()=>{
try {
    const connectionb =await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`mongoDb connection ${connectionb.connection.host}`)
} catch (error) {
    console.log(`MONGODB connection FAILED ",${ error}`)
    process.exit(1);
    
}

 }
 export default connectionDB;
