const getContact = (req, res) =>{
    
    res.status(200).json({message: `Update contact for ${req.params.id}`})

}

export {getContact}