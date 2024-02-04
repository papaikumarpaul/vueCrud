 import express from "express";
import { Deleted } from "../controller/deleted.controler.js";
import { getAllData } from "../controller/featchData.controller.js";
import { getoneData } from "../controller/getone.controller.js";
import { creacted } from "../controller/index.controller.js";
import { login } from "../controller/login.controler.js";
import { Register } from "../controller/register.controller.js";
import { updateData } from "../controller/update.controlles.js";

   export const route=express.Router();
   route.post("/creacted",creacted);
    route.get("/data",getAllData);
    route.get("/getone/:id",getoneData);
    route.put("/update/:id",updateData) // update data
    route.delete("/delete/:id", Deleted) // delete

     route.post("/register",Register); // register
      route.post("/login",login); // login
