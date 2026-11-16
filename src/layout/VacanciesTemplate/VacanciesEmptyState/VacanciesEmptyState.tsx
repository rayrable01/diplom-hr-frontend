import type { FC } from 'react';
import { SearchX, RotateCcw } from 'lucide-react';
import clsx from 'clsx';
import styles from './VacanciesEmptyState.module.css';

export interface VacanciesEmptyStateProps {
  title?: string;
  description?: string;
  onReset?: () => void;
  resetButtonText?: string;
  className?: string;
}

export const VacanciesEmptyState: FC<VacanciesEmptyStateProps> = ({
  title = 'Вакансии не найдены',
  description = 'Попробуйте изменить параметры поиска или сбросить активные фильтры',
  onReset,
  resetButtonText = 'Сбросить фильтры',
  className,
}) => {
  return (
    <div className={clsx(styles.container, className)} role="status" aria-live="polite">
      <div className={styles.iconWrapper} aria-hidden="true">
        <SearchX size={32} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {onReset && (
        <button type="button" onClick={onReset} className={styles.resetButton}>
          <RotateCcw size={16} />
          <span>{resetButtonText}</span>
        </button>
      )}
    </div>
  );
};

export default VacanciesEmptyState;
