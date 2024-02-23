import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import 'dotenv/config';

//Import API
import { AddClass } from './routes/addYogaClass.js';
import { GetClasses } from './routes/getClasses.js';
import { RegisterUser } from './routes/registerUser.js';
import { UserLogin } from './routes/loginUser.js';
import { GetUser } from './routes/getUser.js';


const app = express();
const PORT = process.env.PORT;
const MONGO_DB_URL = process.env.MONGO_DB_URL

//CORS
app.use(cors())

//Body Parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//MongoDB Connection
mongoose.connect(MONGO_DB_URL);


//Setup Routes
app.use("/api", AddClass)
app.use("/api", GetClasses)
app.use("/api", RegisterUser)
app.use("/api", UserLogin)
app.use("/api", GetUser)

app.listen(PORT, ()=>{
    console.log(`Server is Live on ${PORT}`)
})
