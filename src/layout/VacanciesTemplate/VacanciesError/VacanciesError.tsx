import type { FC } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import clsx from 'clsx';
import styles from './VacanciesError.module.css';

export interface VacanciesErrorProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  retryButtonText?: string;
  className?: string;
}

export const VacanciesError: FC<VacanciesErrorProps> = ({
  title = 'Не удалось загрузить вакансии',
  message = 'Произошла непредвиденная ошибка при загрузке данных. Пожалуйста, попробуйте повторить попытку позже.',
  onRetry,
  retryButtonText = 'Попробовать снова',
  className,
}) => {
  return (
    <div className={clsx(styles.container, className)} role="alert" aria-live="assertive">
      <div className={styles.iconWrapper} aria-hidden="true">
        <AlertCircle size={32} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.message}>{message}</p>
      {onRetry && (
        <button type="button" onClick={onRetry} className={styles.retryButton}>
          <RefreshCw size={16} />
          <span>{retryButtonText}</span>
        </button>
      )}
    </div>
  );
};

export default VacanciesError;
