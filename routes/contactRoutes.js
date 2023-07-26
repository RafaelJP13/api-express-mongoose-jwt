import express from 'express';
import {
  createContact, deleteContact, getContact, getContacts, updateContact,
} from '../controllers/contactController';
import validateToken from '../middleware/validateTokenHandler';

const router = express.Router();

router.use(validateToken);
router.get('/', getContacts);
router.get('/:id', getContact);
router.post('/', createContact);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);

export default router;
