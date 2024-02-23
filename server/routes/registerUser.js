import { UserModel } from "../models/userModel.js";
import express from 'express';
import jwt  from "jsonwebtoken";
import bcrypt from "bcrypt"


const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY

router.post('/register', async(req,res) => {
    let {name, email, password} = req.body

    try{

        const alreadyUser = await UserModel.findOne({email})
        
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt)
        
        

        if(alreadyUser){
            res.status(401).json({message: 'Email already registered'})
        }

        if(!alreadyUser){
            await UserModel.insertMany({'name': name, 'email': email, 'password': password})
            const user = await UserModel.findOne({email})
            const token = jwt.sign({'userID': user._id, 'email': email}, SECRET_KEY, {expiresIn: '1h'} )
            res.send({ 'userID': user._id ,'token': token}).status(201).json({message: 'User Registered Succesfully!'})
            
        }

    } catch(error) {

    }


    
    
})

export {router as RegisterUser}