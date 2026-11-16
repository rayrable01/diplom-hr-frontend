import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { VacanciesEmptyState } from './VacanciesEmptyState';

describe('VacanciesEmptyState', () => {
  it('рендерит состояние по умолчанию с текстами по умолчанию', () => {
    render(<VacanciesEmptyState />);

    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByText('Вакансии не найдены')).toBeInTheDocument();
    expect(
      screen.getByText('Попробуйте изменить параметры поиска или сбросить активные фильтры'),
    ).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('рендерит кастомные заголовок и описание', () => {
    render(
      <VacanciesEmptyState
        title="Ничего не нашлось"
        description="Попробуйте выбрать другой город"
      />,
    );

    expect(screen.getByText('Ничего не нашлось')).toBeInTheDocument();
    expect(screen.getByText('Попробуйте выбрать другой город')).toBeInTheDocument();
  });

  it('рендерит кнопку сброса и вызывает onReset при клике', async () => {
    const handleReset = vi.fn();
    const user = userEvent.setup();

    render(<VacanciesEmptyState onReset={handleReset} resetButtonText="Очистить всё" />);

    const button = screen.getByRole('button', { name: /очистить всё/i });
    expect(button).toBeInTheDocument();

    await user.click(button);
    expect(handleReset).toHaveBeenCalledTimes(1);
  });

  it('применяет переданный className', () => {
    const { container } = render(<VacanciesEmptyState className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
