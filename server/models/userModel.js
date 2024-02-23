import express from 'express';
import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    "id": String ,
    "name": {type: String, required: true },
    "email": {type: String, required: true},
    "password": {type: String, required: true},
    "classes": Array
})

export const UserModel = mongoose.model("UserModel", userSchema )