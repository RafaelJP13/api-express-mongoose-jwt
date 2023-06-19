import express from 'express'
const router = express.Router()
import {getContact} from '../controllers/contactController.js'

router.get('/', (req, res) =>{
    
    res.status(200).json({message: 'Get all contacts'})

})

router.get('/:id', getContact)

router.post('/', (req, res) =>{
    
    res.status(200).json({message: 'Create contacts'})

})

router.put('/:id', (req, res) =>{
    
    res.status(200).json({message: `Update contact for ${req.params.id}`})

})

router.delete('/:id', (req, res) =>{
    
    res.status(200).json({message: `Delete contact for ${req.params.id}`})

})

export default router