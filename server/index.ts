import express from 'express';
import cors from 'cors';
import usersRouter from './endpoints/users';

const app = express();
const PORT = process.env.STUB_PORT || 3001;

app.use(cors());
app.use(express.json());

// Роуты эндпоинтов
app.use(usersRouter);

app.listen(PORT, () => {
  console.log(`[Stub Server] API is running on http://localhost:${PORT}`);
});
