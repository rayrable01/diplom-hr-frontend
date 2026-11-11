import { Router, type Request, type Response } from 'express';
import type { User } from '../../src/types/auth';

const authRouter = Router();

const mockUser: User = {
  id: 1,
  email: 'candidate@example.com',
  role: 'candidate',
  fullName: 'Иван Иванов',
  createdAt: '2026-03-01T12:00:00.000Z',
};

authRouter.get(['/auth/me', '/api/auth/me'], (_req: Request, res: Response) => {
  return res.status(200).json(mockUser);
});

export default authRouter;
