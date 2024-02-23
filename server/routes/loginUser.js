import { UserModel } from "../models/userModel.js";
import express from 'express';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";


const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY
const app = express()


router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email })

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ 'userID': user._id, 'email': user.email }, SECRET_KEY, { expiresIn: '1h' })
        res.json({ 'userID':user._id, 'token': token})

    } catch (error) {
        res.json({'message': error })
    }


})

export { router as UserLogin }