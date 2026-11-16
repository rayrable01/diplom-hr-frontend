import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { LoginTemplate } from './LoginTemplate';
import * as loginApiModule from '@/api/login';

vi.mock('@/api/login', () => ({
  useLoginMutation: vi.fn(),
}));

describe('LoginTemplate', () => {
  const mockLoginUser = vi.fn();
  const mockUnwrap = vi.fn();
  const mockOnSwitchToRegister = vi.fn();
  const mockOnModalOpen = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    mockUnwrap.mockResolvedValue({
      accessToken: 'mock-token',
      tokenType: 'Bearer',
      user: {
        id: 1,
        email: 'user@test.com',
        role: 'candidate',
        fullName: 'Test User',
        createdAt: '2026-03-01T12:00:00.000Z',
      },
    });
    mockLoginUser.mockReturnValue({ unwrap: mockUnwrap });
    vi.mocked(loginApiModule.useLoginMutation).mockReturnValue([
      mockLoginUser,
      { isLoading: false } as unknown as ReturnType<typeof loginApiModule.useLoginMutation>[1],
    ]);
  });

  it('рендерит поля ввода и кнопку входа', () => {
    render(
      <LoginTemplate onSwitchToRegister={mockOnSwitchToRegister} onModalOpen={mockOnModalOpen} />,
    );

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Пароль')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Войти' })).toBeInTheDocument();
  });

  it('показывает ошибки валидации при отправке пустой формы', async () => {
    const user = userEvent.setup();
    render(
      <LoginTemplate onSwitchToRegister={mockOnSwitchToRegister} onModalOpen={mockOnModalOpen} />,
    );

    await user.click(screen.getByRole('button', { name: 'Войти' }));

    await waitFor(() => {
      expect(screen.getByText('Некорректный email адрес')).toBeInTheDocument();
      expect(screen.getByText('Введите пароль')).toBeInTheDocument();
    });
    expect(mockLoginUser).not.toHaveBeenCalled();
  });

  it('показывает ошибку при некорректном формате email', async () => {
    const user = userEvent.setup();
    render(
      <LoginTemplate onSwitchToRegister={mockOnSwitchToRegister} onModalOpen={mockOnModalOpen} />,
    );

    await user.type(screen.getByPlaceholderText('Email'), 'invalid-email');
    await user.type(screen.getByPlaceholderText('Пароль'), 'secret123');

    await user.click(screen.getByRole('button', { name: 'Войти' }));

    await waitFor(() => {
      expect(screen.getByText('Некорректный email адрес')).toBeInTheDocument();
    });
    expect(mockLoginUser).not.toHaveBeenCalled();
  });

  it('успешно вызывает мутацию логина и закрывает модалку при корректных данных', async () => {
    const user = userEvent.setup();

    render(
      <LoginTemplate onSwitchToRegister={mockOnSwitchToRegister} onModalOpen={mockOnModalOpen} />,
    );

    await user.type(screen.getByPlaceholderText('Email'), 'user@test.com');
    await user.type(screen.getByPlaceholderText('Пароль'), 'password123');

    await user.click(screen.getByRole('button', { name: 'Войти' }));

    await waitFor(() => {
      expect(mockLoginUser).toHaveBeenCalledTimes(1);
      expect(mockLoginUser).toHaveBeenCalledWith({
        email: 'user@test.com',
        password: 'password123',
      });
      expect(mockUnwrap).toHaveBeenCalledTimes(1);
      expect(mockOnModalOpen).toHaveBeenCalledWith(false);
    });
  });

  it('отображает состояние загрузки при отправке запроса', () => {
    vi.mocked(loginApiModule.useLoginMutation).mockReturnValue([
      mockLoginUser,
      { isLoading: true } as unknown as ReturnType<typeof loginApiModule.useLoginMutation>[1],
    ]);

    render(
      <LoginTemplate onSwitchToRegister={mockOnSwitchToRegister} onModalOpen={mockOnModalOpen} />,
    );

    const submitBtn = screen.getByRole('button', { name: 'Вход...' });
    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).toBeDisabled();
  });

  it('вызывает onSwitchToRegister при клике на ссылку переключения', async () => {
    const user = userEvent.setup();

    render(
      <LoginTemplate onSwitchToRegister={mockOnSwitchToRegister} onModalOpen={mockOnModalOpen} />,
    );

    const switchBtn = screen.getByRole('button', { name: 'Зарегистрироваться' });
    expect(switchBtn).toBeInTheDocument();

    await user.click(switchBtn);

    expect(mockOnSwitchToRegister).toHaveBeenCalledTimes(1);
    expect(mockOnSwitchToRegister).toHaveBeenCalledWith('register');
  });

  it('отображает serverError, если он передан', () => {
    render(
      <LoginTemplate
        serverError="Неверный логин или пароль"
        onSwitchToRegister={mockOnSwitchToRegister}
        onModalOpen={mockOnModalOpen}
      />,
    );

    expect(screen.getByText('Неверный логин или пароль')).toBeInTheDocument();
  });
});
