import express from 'express'

const router = express.Router()
import {createContact, deleteContact, getContact, getContacts, updateContact} from '../controllers/contactController.js'

router.get('/', getContacts)
router.get('/:id', getContact)
router.post('/', createContact)
router.put('/:id', updateContact)
router.delete('/:id', deleteContact)

export default router