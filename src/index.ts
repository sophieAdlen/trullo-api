import express, { Application } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRouter from './routes/userRoutes';
import taskRouter from './routes/taskRoutes';
import dotenv from 'dotenv';

dotenv.config(); // Ladda miljövariabler från .env-filen

const app: Application = express();

// Middleware
app.use(bodyParser.json());

// Anslut till MongoDB Atlas med autentisering
mongoose.connect(process.env.MONGODB_URI || '', {
  user: process.env.MONGODB_USER,
  pass: process.env.MONGODB_PASS,
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.error('Connection error:', error);
  });

// Routers
app.use('/api/users', userRouter);
app.use('/api/tasks', taskRouter);

// Starta servern
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
