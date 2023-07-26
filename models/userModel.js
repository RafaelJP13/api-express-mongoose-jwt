import mongoose from 'mongoose';

const userModel = mongoose.Schema({

  username: {
    type: String,
    required: [true, 'Please add the username!'],
  },
  email: {
    type: String,
    required: [true, 'Please add the user email!'],
    unique: [true, 'Email addres already in use!'],
  },
  password: {
    type: String,
    required: [true, 'Please add the user password!'],
  },

}, {

  timestamps: true,

});

export default mongoose.model('User', userModel);
