import type { Role } from '@/types/types';
import { lazy, type ComponentType } from 'react';

export interface RouteConfig {
  path: string;
  component: ComponentType;
  title: string;
  role: Role;
  isPublic?: boolean;
}

export const routes: RouteConfig[] = [
  // Кабинет кандидата / публичные
  {
    path: '/vacancies',
    component: lazy(() => import('@/pages/VacanciesPage/VacanciesPage')),
    title: 'Список доступных вакансий',
    role: 'candidate',
    isPublic: true,
  },
  {
    path: '/my-resume',
    component: lazy(() => import('@/pages/MyResumePage/MyResumePage')),
    title: 'Мои резюме',
    role: 'candidate',
  },
  {
    path: '/applications',
    component: lazy(() => import('@/pages/ApplicationsPage/ApplicationsPage')),
    title: 'Отклики',
    role: 'candidate',
  },
  {
    path: '/personal',
    component: lazy(() => import('@/pages/PersonalPage/PersonalPage')),
    title: 'Личный кабинет',
    role: 'candidate',
  },

  // Кабинет HR / рекрутера
  {
    path: '/recruiter/vacancies',
    component: lazy(() => import('@/pages/RecruiterVacanciesPage/RecruiterVacanciesPage')),
    title: 'Мои вакансии',
    role: 'hr',
  },
  {
    path: '/recruiter/candidates',
    component: lazy(() => import('@/pages/RecruiterCandidatesPage/RecruiterCandidatesPage')),
    title: 'Кандидаты',
    role: 'hr',
  },
  {
    path: '/recruiter/applications',
    component: lazy(() => import('@/pages/RecruiterApplicationsPage/RecruiterApplicationsPage')),
    title: 'Отклики',
    role: 'hr',
  },
  {
    path: '/recruiter/analytic',
    component: lazy(() => import('@/pages/RecruiterAnalyticPage/RecruiterAnalyticPage')),
    title: 'Аналитика',
    role: 'hr',
  },
  {
    path: '/recruiter/personal',
    component: lazy(() => import('@/pages/RecruiterPersonalPage/RecruiterPersonalPage')),
    title: 'Личный кабинет',
    role: 'hr',
  },
];
