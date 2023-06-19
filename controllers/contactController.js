const getContacts = (req, res) =>{
    
    res.status(200).json({message: `Get contacts`})

}

const getContact = (req, res) =>{
    
    res.status(200).json({message: `Get contact for ${req.params.id}`})
}

const createContact = (req, res) =>{

    console.log(req.body)
    
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