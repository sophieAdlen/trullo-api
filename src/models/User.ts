import mongoose, { Document } from 'mongoose';
import { UserSchema } from '../schemas';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

export const User = mongoose.model<IUser>('User', UserSchema);
