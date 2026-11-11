import { Router, type Request, type Response } from 'express';

const configRouter = Router();

const featureToggles = {
  features: {
    aiScoring: true,
  },
  appVersion: '1.0.0',
};

configRouter.get('/config', (_req: Request, res: Response) => {
  return res.status(200).json(featureToggles);
});

export default configRouter;
