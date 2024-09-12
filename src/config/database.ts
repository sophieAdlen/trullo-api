import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Ladda miljövariabler från .env-filen

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || '');
    console.log("MongoDB connected!");
  } catch (err) {
    console.error("MongoDB connection error: ", err);
  }
};

export default connectToDatabase;
