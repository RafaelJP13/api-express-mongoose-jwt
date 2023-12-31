import asyncHandler from 'express-async-handler';
import Contact from '../models/contactModel';

const getContacts = asyncHandler(async (req, res) => {
  const { id } = req.user;

  const contacts = await Contact.find({ user_id: id });
  res.status(200).json(contacts);
});

const getContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);

  if (!contact) {
    res.status(404);
    throw new Error('Contact Not Found!');
  }

  res.status(200).json(contact);
});

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  const { id } = req.user;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error('all fields must be filled!');
  }

  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: id,
  });

  res.status(201).json(contact);
});

const updateContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user_id = req.user.id;

  const contact = await Contact.findById(id);

  if (!contact) {
    res.status(404);
    throw new Error('Contact Not Found!');
  }

  if (contact.user_id.toString() !== user_id) {
    res.status(403);
    throw new Error('Cannot update this user!');
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
  );

  res.status(200).json(updatedContact);
});

const deleteContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);
  const user_id = req.user.id;

  if (!contact) {
    res.status(404);
    throw new Error('Contact Not Found!');
  }

  if (contact.user_id.toString() !== user_id) {
    res.status(403);
    throw new Error('Cannot update this user!');
  }

  await Contact.deleteOne({ _id: id });

  res.status(200).json(contact);
});

export {

  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,

};
