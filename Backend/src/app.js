import bodyperser from "body-parser";
import cors from "cors";
import express from "express";
import { route } from "./routes/userRoute.js";
const app= express();
app.use(bodyperser.json());
app.use(cors());
app.use("/api",route);
app.use("/api",route);
app.use("/api",route);
app.use("/update",route); 
app.use("/api",route);


 app.use("/api",route)

export { app };
