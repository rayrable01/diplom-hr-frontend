import { Router, type Request, type Response } from 'express';
import type { User } from '../../src/types/user';

const router = Router();

const mockUsers: User[] = [
  { id: '1', name: 'Иван Иванов', email: 'ivan@example.com', role: 'admin' },
  { id: '2', name: 'Анна Смирнова', email: 'anna@example.com', role: 'hr' },
];

router.get('/users', (_req: Request, res: Response) => {
  res.status(200).json(mockUsers);
});

export default router;
