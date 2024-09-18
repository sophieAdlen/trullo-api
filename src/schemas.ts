import { Schema } from 'mongoose';

// Task Schema
const TaskSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ['to-do', 'in progress', 'blocked', 'done'], default: 'to-do' },
  assignedTo: { type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  finishedBy: { type: String}
});

// User Schema
const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }
});

export { TaskSchema, UserSchema };
