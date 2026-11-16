import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { RegisterTemplate } from './RegisterTemplate';
import * as registerApiModule from '@/api/register';

vi.mock('@/api/register', () => ({
  useRegisterMutation: vi.fn(),
}));

describe('RegisterTemplate', () => {
  const mockRegisterUser = vi.fn();
  const mockUnwrap = vi.fn();
  const mockOnSwitchToLogin = vi.fn();
  const mockOnModalOpen = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    mockUnwrap.mockResolvedValue({
      id: 1,
      email: 'anna@hr.com',
      role: 'hr',
      fullName: 'Анна Петрова',
      createdAt: '2026-03-01T12:00:00.000Z',
    });
    mockRegisterUser.mockReturnValue({ unwrap: mockUnwrap });
    vi.mocked(registerApiModule.useRegisterMutation).mockReturnValue([
      mockRegisterUser,
      { isLoading: false } as unknown as ReturnType<
        typeof registerApiModule.useRegisterMutation
      >[1],
    ]);
  });

  it('рендерит все поля формы и свитчер роли', () => {
    render(
      <RegisterTemplate onSwitchToLogin={mockOnSwitchToLogin} onModalOpen={mockOnModalOpen} />,
    );

    expect(screen.getByRole('button', { name: 'Ищу работу' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Ищу сотрудника' })).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Имя')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Фамилия')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Пароль/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Подтверждение пароля')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Зарегистрироваться' })).toBeInTheDocument();
  });

  it('показывает ошибки валидации при отправке пустой формы', async () => {
    const user = userEvent.setup();
    render(
      <RegisterTemplate onSwitchToLogin={mockOnSwitchToLogin} onModalOpen={mockOnModalOpen} />,
    );

    await user.click(screen.getByRole('button', { name: 'Зарегистрироваться' }));

    await waitFor(() => {
      expect(screen.getByText('Имя должно содержать минимум 2 символа')).toBeInTheDocument();
      expect(screen.getByText('Фамилия должна содержать минимум 2 символа')).toBeInTheDocument();
      expect(screen.getByText('Некорректный email адрес')).toBeInTheDocument();
      expect(screen.getByText('Пароль должен содержать минимум 6 символов')).toBeInTheDocument();
    });
    expect(mockRegisterUser).not.toHaveBeenCalled();
  });

  it('показывает ошибку, если пароли не совпадают', async () => {
    const user = userEvent.setup();
    render(
      <RegisterTemplate onSwitchToLogin={mockOnSwitchToLogin} onModalOpen={mockOnModalOpen} />,
    );

    await user.type(screen.getByPlaceholderText('Имя'), 'Иван');
    await user.type(screen.getByPlaceholderText('Фамилия'), 'Иванов');
    await user.type(screen.getByPlaceholderText('Email'), 'ivan@example.com');
    await user.type(screen.getByPlaceholderText(/Пароль \(не менее/i), 'password123');
    await user.type(screen.getByPlaceholderText('Подтверждение пароля'), 'wrongpassword');

    await user.click(screen.getByRole('button', { name: 'Зарегистрироваться' }));

    await waitFor(() => {
      expect(screen.getByText('Пароли не совпадают')).toBeInTheDocument();
    });
    expect(mockRegisterUser).not.toHaveBeenCalled();
  });

  it('успешно вызывает мутацию регистрации и закрывает модалку с корректными данными и выбранной ролью hr', async () => {
    const user = userEvent.setup();

    render(
      <RegisterTemplate onSwitchToLogin={mockOnSwitchToLogin} onModalOpen={mockOnModalOpen} />,
    );

    // Переключаем свитчер на "Ищу сотрудника" (hr)
    await user.click(screen.getByRole('button', { name: 'Ищу сотрудника' }));

    await user.type(screen.getByPlaceholderText('Имя'), 'Анна');
    await user.type(screen.getByPlaceholderText('Фамилия'), 'Петрова');
    await user.type(screen.getByPlaceholderText('Email'), 'anna@hr.com');
    await user.type(screen.getByPlaceholderText(/Пароль \(не менее/i), 'secret123');
    await user.type(screen.getByPlaceholderText('Подтверждение пароля'), 'secret123');

    await user.click(screen.getByRole('button', { name: 'Зарегистрироваться' }));

    await waitFor(() => {
      expect(mockRegisterUser).toHaveBeenCalledTimes(1);
      expect(mockRegisterUser).toHaveBeenCalledWith({
        fullName: 'Анна Петрова',
        email: 'anna@hr.com',
        password: 'secret123',
        role: 'hr',
      });
      expect(mockUnwrap).toHaveBeenCalledTimes(1);
      expect(mockOnModalOpen).toHaveBeenCalledWith(false);
    });
  });

  it('вызывает onSwitchToLogin при клике на ссылку переключения', async () => {
    const user = userEvent.setup();

    render(
      <RegisterTemplate onSwitchToLogin={mockOnSwitchToLogin} onModalOpen={mockOnModalOpen} />,
    );

    const switchBtn = screen.getByRole('button', { name: 'Войти' });
    expect(switchBtn).toBeInTheDocument();

    await user.click(switchBtn);

    expect(mockOnSwitchToLogin).toHaveBeenCalledTimes(1);
    expect(mockOnSwitchToLogin).toHaveBeenCalledWith('auth');
  });
});
