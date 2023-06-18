import express from 'express'
import 'dotenv/config'

const app = express()

const PORT = process.env.PORT || 8001

app.get('/api/contacts', (req, res) =>{
    
    res.status(200).json({message: 'Get all contacts'})

})

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`)

})


