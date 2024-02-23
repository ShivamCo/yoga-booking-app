import mongoose from "mongoose";
import express from "express";


import { YogaClassModel } from "../models/yogaClassModel.js";


const router = express.Router()

router.post("/get-classes", async (req, res) => {

    const filter = req.body

    const MinMax = filter.Price.split("to")
    const min = Number(MinMax[0])
    const max = Number(MinMax[1])


    try {

        if (filter.Level == 'All' && filter.Price != 'All') {
            const YogaClasses = await YogaClassModel.find({ "period_currency_fee.fee": { $gte: min, $lte: max } })
            res.send(YogaClasses)
        }

        if (filter.Level != 'All' && filter.Price == 'All') {
            const YogaClasses = await YogaClassModel.find({ 'level': filter.Level })
            res.send(YogaClasses)
        }

        if (filter.Level != 'All' && filter.Price != 'All') {
            const YogaClasses = await YogaClassModel.find({ 'level': filter.Level, "period_currency_fee.fee": { $gte: min, $lte: max } })
            res.send(YogaClasses)
        }

        if (filter.Level == 'All' && filter.Price == 'All') {
            const YogaClasses = await YogaClassModel.find()
            res.send(YogaClasses)
        }


    } catch (error) {
        res.send({ 'message': 'Error in Fetching' })
    }



})

router.post("/get-enrolled-classes", async (req, res) => {

    const classID = req.body.classes
    const newArray = classID.map((str) => Number(str));
    
    // const newArray = classID.map((i)=> console.lg)
    

    try {
       

        if (classID.length > 0) {
            const YogaClasses = await YogaClassModel.find({ 'classID': { $in: newArray } })

            res.send(YogaClasses)
        }



    } catch (error) {
        res.send({ 'message': error})
        // console.log(error)
    }



})

export { router as GetClasses }


