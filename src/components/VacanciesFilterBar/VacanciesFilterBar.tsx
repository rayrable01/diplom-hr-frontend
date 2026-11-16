import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import styles from './VacanciesFilterBar.module.css';

export const VacanciesFilterBar = () => {
  return (
    <div className={styles.filterBarContainer}>
      <div className={styles.tabsList} role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected="true"
          className={clsx(styles.tabButton, styles.tabButtonActive)}
        >
          <span>Все вакансии</span>
          <span className={styles.badge}>1248</span>
        </button>

        <button type="button" role="tab" aria-selected="false" className={styles.tabButton}>
          <span>Отклики</span>
          <span className={clsx(styles.badge, styles.badgeInactive)}>47</span>
        </button>

        <button type="button" role="tab" aria-selected="false" className={styles.tabButton}>
          <span>Избранные</span>
          <span className={clsx(styles.badge, styles.badgeInactive)}>12</span>
        </button>
      </div>

      <button type="button" className={styles.sortButton}>
        <span>Сортировка: по релевантности</span>
        <ChevronDown size={16} />
      </button>
    </div>
  );
};

export default VacanciesFilterBar;
