import { Router, type Request, type Response } from 'express';
import { type HealthPositiveResponse, type HealthBadResponse } from '../../src/types/types';

const healthRouter = Router();

const positiveHealthResponse: HealthPositiveResponse = {
  status: 'ok',
  version: '1.0.0',
};

const badHealthResponse: HealthBadResponse = {
  status: 'fail',
  detail: 'Внутренняя ошибка сервера',
  version: '1.0.0',
};

const isServerAlive = true;

healthRouter.get('/health', (_req: Request, res: Response) => {
  if (isServerAlive) {
    return res.status(200).json(positiveHealthResponse);
  }

  return res.status(500).json(badHealthResponse);
});

export default healthRouter;
