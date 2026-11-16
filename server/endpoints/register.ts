import { Router, type Request, type Response } from 'express';
import type { RegisterResponse } from '../../src/types/auth';

const registerRouter = Router();

const registerSuccessResponse: RegisterResponse = {
  id: 0,
  email: 'dyablo@gmail.com',
  role: 'candidate',
  fullName: 'Danil G',
  createdAt: '2026-11-11T21:50:55.452Z',
};

registerRouter.post('/register', (_req: Request, res: Response) => {
  return res.status(200).json(registerSuccessResponse);
});

export default registerRouter;
