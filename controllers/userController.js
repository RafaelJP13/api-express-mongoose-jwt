import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import bcrypt from 'bcrypt'

const registerUser = asyncHandler(async (req, res) =>{

    const {username, email, password} = req.body

    if(!username || !email || !password){

        res.status(400)
        throw new Error('All fields must be filled!')
    }

    const userAvailable = await User.findOne({email})

    if(userAvailable){
        res.status(400)
        throw new Error('User already in use!')
    }

    const hashPassword = await bcrypt.hash(password, 10)
    const user = await User.create({
        username,
        email,
        password:hashPassword,
    })

    if(user){
        res.status(201).json({_id: user.id, email: user.email})
    }else{
        res.status(400)
        throw new Error('User data not valid!')
    }

})

const loginUser = asyncHandler(async (req, res) =>{

    res.json({message:'Login the user'})

})

const currentUser = asyncHandler(async (req, res) =>{

    res.json({message:'Current user information'})

})

export {registerUser, loginUser, currentUser }
