 import express from "express";
import { creacted } from "../controller/index.controller.js";

   export const route=express.Router();
   route.post("/creacted",creacted)

