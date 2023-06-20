import asyncHandler from 'express-async-handler'

const getContacts = asyncHandler(async (req, res) =>{
    
    res.status(200).json({message: `Get contacts`})

})

const getContact = asyncHandler((req, res) =>{
    
    res.status(200).json({message: `Get contact for ${req.params.id}`})
})

const createContact = asyncHandler(async (req, res) =>{

    const {name, email, phone} = req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error('all Fields must be filled!')
    }
    res.status(200).json({message: `Create contact`})

})

const updateContact = asyncHandler(async (req, res) =>{
    
    res.status(200).json({message: `Update contact for ${req.params.id}`})

})

const deleteContact = asyncHandler(async (req, res) =>{
    
    res.status(200).json({message: `Delete contact for ${req.params.id}`})

})

export {

    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact,

}