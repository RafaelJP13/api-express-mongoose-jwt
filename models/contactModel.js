import mongoose from 'mongoose'

const contactSchema = mongoose.Schema({
    
    name: {
        type: String,
        required: [true, 'Please add the contact name!'],
    },
    email: {
        type: String,
        required: [true, 'Please add the contact email!'],
    },
    phone: {
        type: String,
        required: [true, 'Please add the contact phone!'],
    },

}, {   

    timestamps: true,

})

export default mongoose.model('Contact', contactSchema)