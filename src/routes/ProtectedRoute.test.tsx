import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import * as authApiModule from '@/api/auth';

vi.mock('@/api/auth', () => ({
  useGetMeQuery: vi.fn(),
}));

describe('ProtectedRoute', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('рендерит контент напрямую, если маршрут публичный (isPublic = true)', () => {
    vi.mocked(authApiModule.useGetMeQuery).mockReturnValue({
      data: undefined,
      isLoading: false,
    } as unknown as ReturnType<typeof authApiModule.useGetMeQuery>);

    render(
      <MemoryRouter>
        <ProtectedRoute isPublic>
          <div>Публичная страница</div>
        </ProtectedRoute>
      </MemoryRouter>,
    );

    expect(screen.getByText('Публичная страница')).toBeInTheDocument();
  });

  it('показывает скелетон, пока идет загрузка данных пользователя (isLoading = true)', () => {
    vi.mocked(authApiModule.useGetMeQuery).mockReturnValue({
      data: undefined,
      isLoading: true,
    } as unknown as ReturnType<typeof authApiModule.useGetMeQuery>);

    const { container } = render(
      <MemoryRouter>
        <ProtectedRoute role="candidate">
          <div>Приватный контент</div>
        </ProtectedRoute>
      </MemoryRouter>,
    );

    expect(screen.queryByText('Приватный контент')).not.toBeInTheDocument();
    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
  });

  it('мгновенно редиректит на /vacancies, если пользователь не авторизован', () => {
    vi.mocked(authApiModule.useGetMeQuery).mockReturnValue({
      data: undefined,
      isLoading: false,
    } as unknown as ReturnType<typeof authApiModule.useGetMeQuery>);

    render(
      <MemoryRouter initialEntries={['/personal']}>
        <Routes>
          <Route
            path="/personal"
            element={
              <ProtectedRoute role="candidate">
                <div>Личный кабинет</div>
              </ProtectedRoute>
            }
          />
          <Route path="/vacancies" element={<div>Страница вакансий</div>} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.queryByText('Личный кабинет')).not.toBeInTheDocument();
    expect(screen.getByText('Страница вакансий')).toBeInTheDocument();
  });

  it('показывает экран AccessDenied, если роль пользователя (candidate) не совпадает с hr', () => {
    vi.mocked(authApiModule.useGetMeQuery).mockReturnValue({
      data: {
        id: 1,
        email: 'cand@test.com',
        role: 'candidate',
        fullName: 'Кандидат Тест',
        createdAt: '2026-01-01',
      },
      isLoading: false,
    } as unknown as ReturnType<typeof authApiModule.useGetMeQuery>);

    render(
      <MemoryRouter initialEntries={['/recruiter/vacancies']}>
        <Routes>
          <Route
            path="/recruiter/vacancies"
            element={
              <ProtectedRoute role="hr">
                <div>HR кабинет</div>
              </ProtectedRoute>
            }
          />
          <Route path="/vacancies" element={<div>Страница вакансий</div>} />
        </Routes>
      </MemoryRouter>,
    );

    // Приватный контент не должен быть виден
    expect(screen.queryByText('HR кабинет')).not.toBeInTheDocument();
    // Вместо редиректа отображается информативный экран AccessDenied
    expect(screen.getByText('Доступ ограничен')).toBeInTheDocument();
    const returnLink = screen.getByRole('link', { name: 'Перейти к списку вакансий' });
    expect(returnLink).toBeInTheDocument();
    expect(returnLink).toHaveAttribute('href', '/vacancies');
  });

  it('показывает кнопку возврата в кабинет рекрутера для HR при несовпадении роли', () => {
    vi.mocked(authApiModule.useGetMeQuery).mockReturnValue({
      data: {
        id: 2,
        email: 'hr@test.com',
        role: 'hr',
        fullName: 'HR Тест',
        createdAt: '2026-01-01',
      },
      isLoading: false,
    } as unknown as ReturnType<typeof authApiModule.useGetMeQuery>);

    render(
      <MemoryRouter initialEntries={['/personal']}>
        <Routes>
          <Route
            path="/personal"
            element={
              <ProtectedRoute role="candidate">
                <div>Кабинет соискателя</div>
              </ProtectedRoute>
            }
          />
          <Route path="/recruiter/vacancies" element={<div>HR кабинет</div>} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText('Доступ ограничен')).toBeInTheDocument();
    const returnLink = screen.getByRole('link', { name: 'Перейти в кабинет рекрутера' });
    expect(returnLink).toBeInTheDocument();
    expect(returnLink).toHaveAttribute('href', '/recruiter/vacancies');
  });

  it('рендерит контент, если роль пользователя совпадает с требуемой', () => {
    vi.mocked(authApiModule.useGetMeQuery).mockReturnValue({
      data: {
        id: 2,
        email: 'hr@test.com',
        role: 'hr',
        fullName: 'HR Тест',
        createdAt: '2026-01-01',
      },
      isLoading: false,
    } as unknown as ReturnType<typeof authApiModule.useGetMeQuery>);

    render(
      <MemoryRouter>
        <ProtectedRoute role="hr">
          <div>HR кабинет</div>
        </ProtectedRoute>
      </MemoryRouter>,
    );

    expect(screen.getByText('HR кабинет')).toBeInTheDocument();
  });
});
