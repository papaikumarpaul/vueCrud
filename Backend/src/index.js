import dotenv from "dotenv";
import { app } from "../src/app.js";
import connectionDB from "../src/db/index.js";
dotenv.config({
    path:"./env"
})
connectionDB().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`)
    })
}).catch((error)=>{
console.log(error)
})
