import express from 'express';
import 'dotenv/config';
import contactRoutes from './routes/contactRoutes.js';
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import connectDb from './config/dbConnection.js';

connectDb();
const app = express();

const PORT = process.env.PORT || 8001;

app.use(express.json());
app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
