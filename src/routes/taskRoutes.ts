import express from 'express';
import { Task } from '../models/Task';

const router = express.Router();

// Skapa en Task
router.post('/', async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

// Läs alla Tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find().populate('assignedTo');
  res.json(tasks);
});

// Uppdatera en Task
router.put('/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

// Ta bort en Task
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

export default router;
