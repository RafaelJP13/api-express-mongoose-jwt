import asyncHandler from 'express-async-handler'
import Contact from '../models/contactModel.js'

const getContacts = asyncHandler(async (req, res) =>{

    const {id} = req.user

    const contacts = await Contact.find({user_id:id})
    res.status(200).json(contacts)

})

const getContact = asyncHandler(async (req, res) =>{

    const {id} = req.params
    const contact = await Contact.findById(id)

    if(!contact){
        res.status(404)
        throw new Error('Contact Not Found!');
    }

    res.status(200).json(contact)
})

const createContact = asyncHandler(async (req, res) =>{

    const {name, email, phone} = req.body

    if(!name || !email || !phone){
        res.status(400)
        throw new Error('all fields must be filled!')
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
    })

    res.status(201).json(contact)

})  

const updateContact = asyncHandler(async (req, res) =>{

    const {id} = req.params

    const contact = await Contact.findById(id)

    if(!contact){
        res.status(404)
        throw new Error('Contact Not Found!')
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        id,
        req.body,
        {new: true},
    )
    
    res.status(200).json(updatedContact)

})

const deleteContact = asyncHandler(async (req, res) =>{

    const {id} = req.params
    const contact = await Contact.findById(id)
    
    if(!contact){
        res.status(404)
        throw new Error('Contact Not Found!')
    }

    await Contact.deleteOne({_id:id})
    
    res.status(200).json(contact)

})

export {

    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact,

}