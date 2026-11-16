import { Router, type Request, type Response } from 'express';
import type { LoginResponse } from '../../src/types/auth';

const loginRouter = Router();

const loginSuccessResponse: LoginResponse = {
  accessToken: 'mock-access-token',
  tokenType: 'Bearer',
  user: {
    id: 1,
    email: 'candidate@example.com',
    role: 'candidate',
    fullName: 'Иван Иванов',
    createdAt: '2026-03-01T12:00:00.000Z',
  },
};

loginRouter.post('/login', (_req: Request, res: Response) => {
  return res.status(200).json(loginSuccessResponse);
});

export default loginRouter;
