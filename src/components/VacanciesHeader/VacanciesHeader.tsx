import styles from './VacanciesHeader.module.css';

export const VacanciesHeader = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.titleSection}>
        <h1 className={styles.mainTitle}>Вакансии</h1>
        <p className={styles.subtitle}>Найдите работу мечты среди актуальных вакансий</p>
      </div>
    </div>
  );
};

export default VacanciesHeader;
