import asyncHandler from 'express-async-handler'

const registerUser = asyncHandler(async (req, res) =>{

    res.json({message:'Register the user'})

})

const loginUser = asyncHandler(async (req, res) =>{

    res.json({message:'Login the user'})

})

const currentUser = asyncHandler(async (req, res) =>{

    res.json({message:'Current user information'})

})

export {registerUser, loginUser, currentUser }
