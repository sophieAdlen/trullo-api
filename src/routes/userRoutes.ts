import express from 'express';
import { User } from '../models/User';
import bcrypt from 'bcryptjs';

const router = express.Router();

// Skapa en User
router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

// Läs alla Users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Uppdatera en User
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

// Ta bort en User
router.delete('/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

export default router;
