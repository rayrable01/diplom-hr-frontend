import { Router, type Request, type Response } from 'express';
import type { VacancyResponse } from '../../src/types/vacancies';

const vacanciesRouter = Router();

export const vacanciesMock: VacancyResponse = [
  {
    id: '1',
    creatorId: 'user-101',
    title: 'Frontend Developer (React)',
    company: 'Yandex',
    description:
      'Разработка и поддержка пользовательских интерфейсов на React. Участие в проектировании архитектуры приложения, интеграция с REST API, оптимизация производительности.',
    requiredExperienceInYears: 2,
    requiredSkills: ['React', 'TypeScript', 'JavaScript', 'Redux Toolkit', 'REST API', 'Git'],
    salaryMin: 120000,
    salaryMax: 180000,
    status: 'ACTIVE',
    createdAt: '2026-11-10T12:00:00.000Z',
  },
  {
    id: '2',
    creatorId: 'user-102',
    title: 'Junior Frontend Developer',
    company: 'Yandex',
    description:
      'Разработка новых компонентов интерфейса, исправление ошибок и участие в командной работе над веб-приложением. Подойдёт разработчику с коммерческим опытом или сильными учебными проектами.',
    requiredExperienceInYears: 0,
    requiredSkills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Figma'],
    salaryMin: 60000,
    salaryMax: 90000,
    status: 'ACTIVE',
    createdAt: '2026-11-09T09:30:00.000Z',
  },
  {
    id: '3',
    creatorId: 'user-103',
    title: 'Middle Fullstack Developer',
    company: 'Yandex',
    description:
      'Разработка клиентской и серверной частей веб-приложения. Проектирование API, работа с базами данных, реализация бизнес-логики и участие в принятии технических решений.',
    requiredExperienceInYears: 3,
    requiredSkills: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Docker'],
    salaryMin: 180000,
    salaryMax: 250000,
    status: 'ACTIVE',
    createdAt: '2026-11-08T15:45:00.000Z',
  },
];

vacanciesRouter.get('/vacancies', (_req: Request, res: Response) => {
  setTimeout(() => {
    res.status(200).json(vacanciesMock);
  }, 0);
});

export default vacanciesRouter;
