import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { VacanciesError } from './VacanciesError';

describe('VacanciesError', () => {
  it('рендерит состояние ошибки по умолчанию с текстами по умолчанию', () => {
    render(<VacanciesError />);

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText('Не удалось загрузить вакансии')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Произошла непредвиденная ошибка при загрузке данных. Пожалуйста, попробуйте повторить попытку позже.',
      ),
    ).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('рендерит кастомные заголовок и сообщение об ошибке', () => {
    render(<VacanciesError title="Сбой сети" message="Сервер временно недоступен" />);

    expect(screen.getByText('Сбой сети')).toBeInTheDocument();
    expect(screen.getByText('Сервер временно недоступен')).toBeInTheDocument();
  });

  it('рендерит кнопку повторной попытки и вызывает onRetry при клике', async () => {
    const handleRetry = vi.fn();
    const user = userEvent.setup();

    render(<VacanciesError onRetry={handleRetry} retryButtonText="Повторить запрос" />);

    const button = screen.getByRole('button', { name: /повторить запрос/i });
    expect(button).toBeInTheDocument();

    await user.click(button);
    expect(handleRetry).toHaveBeenCalledTimes(1);
  });

  it('применяет переданный className', () => {
    const { container } = render(<VacanciesError className="error-custom-class" />);
    expect(container.firstChild).toHaveClass('error-custom-class');
  });
});
