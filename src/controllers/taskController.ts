import { Request, Response } from 'express';
import Task from '../models/Task';

export const createTask = async (req: Request, res: Response) => {
  const { title, description, status } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });

  try {
    const task = await Task.create({ title, description, status });
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getTasks = async (_: Request, res: Response) => {
  const tasks = await Task.find();
  res.json(tasks);
};

export const getTaskById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  const task = await Task.findByIdAndUpdate(
    id,
    { title, description, status },
    { new: true, runValidators: true }
  );
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await Task.findByIdAndDelete(id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json({ message: 'Task deleted' });
};
