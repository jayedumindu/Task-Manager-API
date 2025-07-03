import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes';
import { requestLogger } from './config/logger';

const app = express();
app.use(cors());
app.use(express.json());

app.use(requestLogger);
app.use('/tasks', taskRoutes);

app.get('/', (_req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Task Manager API is running',
    timestamp: new Date().toISOString(),
  });
});

export default app;
