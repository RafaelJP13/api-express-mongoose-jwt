import express from 'express'
import 'dotenv/config'
import contactRoutes from './routes/contactRoutes.js'

const app = express()

const PORT = process.env.PORT || 8001

app.use('/api/contacts', contactRoutes)

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`)

})
