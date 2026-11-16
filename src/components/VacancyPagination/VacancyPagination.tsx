import { ChevronRight, ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import styles from './VacancyPagination.module.css';

export const VacancyPagination = () => {
  return (
    <nav className={styles.paginationContainer} aria-label="Пагинация вакансий">
      {/* Счётчик показанных */}
      <span className={styles.counter}>Показано 1–20 из 1 248 вакансий</span>

      {/* Кнопки страниц */}
      <div className={styles.pagesList}>
        <button
          type="button"
          className={clsx(styles.pageButton, styles.pageButtonActive)}
          aria-current="page"
        >
          1
        </button>
        <button type="button" className={styles.pageButton}>
          2
        </button>
        <button type="button" className={styles.pageButton}>
          3
        </button>
        <span className={styles.ellipsis} aria-hidden="true">
          ...
        </span>
        <button type="button" className={styles.pageButton}>
          42
        </button>
        <button type="button" className={styles.nextButton} aria-label="Следующая страница">
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Селектор количества на страницу */}
      <div className={styles.perPageSelector}>
        <span>Показывать по:</span>
        <button type="button" className={styles.perPageButton}>
          <span>20</span>
          <ChevronDown size={14} />
        </button>
      </div>
    </nav>
  );
};

export default VacancyPagination;
