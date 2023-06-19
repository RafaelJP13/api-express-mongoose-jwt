const getContacts = (req, res) =>{
    
    res.status(200).json({message: `Get contacts`})

}

const getContact = (req, res) =>{
    
    res.status(200).json({message: `Get contact for ${req.params.id}`})
}

const createContact = (req, res) =>{

    const {name, email, phone} = req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error('all Fields must be filled!')
    }
    res.status(200).json({message: `Create contact`})

}

const updateContact = (req, res) =>{
    
    res.status(200).json({message: `Update contact for ${req.params.id}`})

}

const deleteContact = (req, res) =>{
    
    res.status(200).json({message: `Delete contact for ${req.params.id}`})

}

export {

    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact,

}