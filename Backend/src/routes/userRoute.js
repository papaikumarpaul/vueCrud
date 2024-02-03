 import express from "express";
import { getAllData } from "../controller/featchData.controller.js";
import { getoneData } from "../controller/getone.controller.js";
import { creacted } from "../controller/index.controller.js";

   export const route=express.Router();
   route.post("/creacted",creacted);
    route.get("/data",getAllData);
    route.get("/getone/:id",getoneData);

