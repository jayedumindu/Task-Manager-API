import { Router } from 'express';
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from '../controllers/taskController';
import { asyncHandler } from '../config/asyncHandler';

const router = Router();

router.post('/', asyncHandler(createTask));
router.get('/', asyncHandler(getTasks));
router.get('/:id', asyncHandler(getTaskById));
router.put('/:id', asyncHandler(updateTask));
router.delete('/:id', asyncHandler(deleteTask));

export default router;
