import mongoose from "mongoose";
import { YogaClassModel } from "../models/yogaClassModel.js";
import express from 'express'
import { allClasses } from "./allCalsses.js";


const rotuer = express.Router()

rotuer.post("/add-yoga-class", (req,res)=>{
    //  YogaClassModel.insertMany(allClasses)
} )

export { rotuer as AddClass }


