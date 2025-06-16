import express from "express";
// import jwt from 'jsonwebtoken'
// import bcrypt from 'bcryptjs'
// import db from "../db.js";


const router = express.Router()

//Register auth
router.post('/register', (req, res)=>{
 console.log('register Page');
 
})

//Login auth
router.post('/login', (req, res)=>{
    console.log('Login Page');
    
})


export default router