import mongoose, { Document } from 'mongoose';
import { TaskSchema } from '../schemas';

export interface ITask extends Document {
  title: string;
  description: string;
  status: string;
  assignedTo: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
  finishedBy: Date;
}

export const Task = mongoose.model<ITask>('Task', TaskSchema, 'trullo-task');