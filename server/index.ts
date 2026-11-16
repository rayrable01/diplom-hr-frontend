import express from 'express';
import cors from 'cors';
import healthRouter from './endpoints/health';
import configRouter from './endpoints/config';
import authRouter from './endpoints/auth';
import registerRouter from './endpoints/register';
import loginRouter from './endpoints/login';
import vacanciesRouter from './endpoints/vacancies';

const app = express();
const PORT = process.env.STUB_PORT || 3001;

app.use(cors());
app.use(express.json());

// Роуты эндпоинтов
app
  .use(healthRouter)
  .use(configRouter)
  .use(authRouter)
  .use(registerRouter)
  .use(loginRouter)
  .use(vacanciesRouter);

app.listen(PORT, () => {
  console.log(`[Stub Server] API is running on http://localhost:${PORT}`);
});
