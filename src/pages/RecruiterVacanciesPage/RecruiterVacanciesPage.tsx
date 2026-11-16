import Container from '@/ui/Container/Container';
import RecruiterVacancyCard from '@/components/RecruiterVacancyCard/RecruiterVacancyCard';
import { Plus } from 'lucide-react';
import clsx from 'clsx';
import styles from './RecruiterVacanciesPage.module.css';

const RecruiterVacanciesPage = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <header className={styles.header}>
          <div className={styles.titleSection}>
            <h1 className={styles.mainTitle}>Мои вакансии</h1>
            <p className={styles.subtitle}>
              Управление опубликованными вакансиями, просмотр откликов и статистика по найму
            </p>
          </div>
          <button type="button" className={styles.createButton}>
            <Plus size={18} />
            <span>Создать вакансию</span>
          </button>
        </header>

        {/* Табы фильтрации */}
        <div className={styles.tabsList} role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected="true"
            className={clsx(styles.tabButton, styles.tabButtonActive)}
          >
            <span>Все вакансии</span>
            <span className={styles.badge}>3</span>
          </button>
          <button type="button" role="tab" aria-selected="false" className={styles.tabButton}>
            <span>Активные</span>
            <span className={clsx(styles.badge, styles.badgeInactive)}>2</span>
          </button>
          <button type="button" role="tab" aria-selected="false" className={styles.tabButton}>
            <span>Черновики</span>
            <span className={clsx(styles.badge, styles.badgeInactive)}>1</span>
          </button>
        </div>

        {/* Список вакансий рекрутера */}
        <div className={styles.cardsList}>
          <RecruiterVacancyCard
            title="Senior Frontend Developer"
            status="active"
            salaryMin={240000}
            salaryMax={320000}
            requiredExperienceInYears={4}
            requiredSkills={['React', 'TypeScript', 'Redux Toolkit', 'Next.js', 'Webpack']}
            applicationsCount={32}
            interviewCount={6}
            createdAt="8 ноября 2026"
          />

          <RecruiterVacancyCard
            title="Middle Frontend Developer"
            status="active"
            salaryMin={180000}
            salaryMax={230000}
            requiredExperienceInYears={2}
            requiredSkills={['React', 'TypeScript', 'CSS Modules', 'RTK Query']}
            applicationsCount={19}
            interviewCount={3}
            createdAt="10 ноября 2026"
          />

          <RecruiterVacancyCard
            title="Lead React Architect"
            status="draft"
            salaryMin={350000}
            salaryMax={450000}
            requiredExperienceInYears={6}
            requiredSkills={['React', 'TypeScript', 'Microfrontends', 'System Design']}
            applicationsCount={0}
            interviewCount={0}
            createdAt="12 ноября 2026"
          />
        </div>
      </Container>
    </section>
  );
};

export default RecruiterVacanciesPage;
