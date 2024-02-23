import mongoose from "mongoose";
import express from "express";


import { UserModel } from "../models/userModel.js";


const router = express.Router()

router.post("/get-user", async (req, res) => {

    const userID = req.body.userID
    

    try {
        
        const user = await UserModel.findOne({'_id': userID})
            
        res.send({'classes': user.classes, 'name': user.name})

    } catch(error) {
        res.send({'message': 'Error in Fetching'})
        console.log(error)
    }



})

router.post("/add-class", async (req, res) => {

    let {userID, classID} = req.body
    

    const alreadyEnrolled = await UserModel.findOne({'_id': userID, 'classes': classID})

    try {
        
        
        

        if(!alreadyEnrolled) {
            await UserModel.findByIdAndUpdate({_id: userID}, {$push: {'classes': classID}})
            res.send({'message': 'Class Joined Succesfully'})
        }

        if(alreadyEnrolled){
            res.send({'message': 'Already Enrolled!'})
        } 
        

    } catch(error) {
        res.send({'message': 'Error in Fetching'})
        // console.log(error)
    }



})

router.post("/remove-class", async (req, res) => {

    const {userID, classID} = req.body
    

    const alreadyEnrolled = await UserModel.findOne({'_id': userID, 'classes': classID})

    try {

        if(alreadyEnrolled){
            await UserModel.findByIdAndUpdate({'_id': userID}, {$pull: {'classes': classID}})
            res.send({'message': 'Removed Successfully'})
        } 

        if(!alreadyEnrolled) {
            
            res.send({'message': 'No Yoga Class of this name found'})
        }

        
        

    } catch(error) {
        res.send({'message': 'Error in Fetching'})
        // console.log(error)
    }



})

export { router as GetUser }


