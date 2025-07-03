// logger.ts (optional: place in a separate file for reuse)
import { Request, Response, NextFunction } from 'express';

export function requestLogger(req: Request, res: Response, next: NextFunction) {
  const start = process.hrtime();
  const { method, url } = req;
  const timestamp = new Date().toISOString();

  res.on('finish', () => {
    const [seconds, nanoseconds] = process.hrtime(start);
    const durationMs = (seconds * 1000 + nanoseconds / 1e6).toFixed(2);
    const log = `[${timestamp}] ${method} ${url} ${res.statusCode} - ${durationMs} ms`;
    console.log(log);
  });

  next();
}
