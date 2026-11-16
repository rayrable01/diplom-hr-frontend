import Container from '@/ui/Container/Container';
import ApplicationCard from '@/components/ApplicationCard/ApplicationCard';
import clsx from 'clsx';
import styles from './ApplicationsPage.module.css';

const ApplicationsPage = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.mainTitle}>Мои отклики</h1>
          <p className={styles.subtitle}>
            Отслеживайте статус ваших откликов на вакансии и приглашения на собеседования
          </p>
        </header>

        {/* Табы фильтрации по статусу */}
        <div className={styles.tabsList} role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected="true"
            className={clsx(styles.tabButton, styles.tabButtonActive)}
          >
            <span>Все отклики</span>
            <span className={styles.badge}>4</span>
          </button>
          <button type="button" role="tab" aria-selected="false" className={styles.tabButton}>
            <span>На рассмотрении</span>
            <span className={clsx(styles.badge, styles.badgeInactive)}>2</span>
          </button>
          <button type="button" role="tab" aria-selected="false" className={styles.tabButton}>
            <span>Интервью</span>
            <span className={clsx(styles.badge, styles.badgeInactive)}>1</span>
          </button>
          <button type="button" role="tab" aria-selected="false" className={styles.tabButton}>
            <span>Оффер</span>
            <span className={clsx(styles.badge, styles.badgeInactive)}>1</span>
          </button>
        </div>

        {/* Список откликов */}
        <div className={styles.cardsList}>
          <ApplicationCard
            vacancyTitle="Senior Frontend Developer"
            companyName="Яндекс"
            companyLogoBg="#ea4335"
            companyLogoText="Я"
            status="interview"
            statusLabel="Интервью назначено"
            createdAt="10 ноября 2026"
            coverLetter="Здравствуйте! Буду рад пройти техническое интервью на позицию Senior Frontend Developer."
          />

          <ApplicationCard
            vacancyTitle="Middle Frontend Developer"
            companyName="Сбер"
            companyLogoBg="#22c55e"
            companyLogoText="С"
            status="reviewing"
            statusLabel="На рассмотрении"
            createdAt="11 ноября 2026"
            coverLetter="Добрый день! Имею опыт в разработке банковских интерфейсов с соблюдением стандартов доступности."
          />

          <ApplicationCard
            vacancyTitle="Frontend Developer (Fintech)"
            companyName="Т-Банк"
            companyLogoBg="#facc15"
            companyLogoText="Т"
            status="offer"
            statusLabel="Оффер получен"
            createdAt="5 ноября 2026"
            coverLetter="Заинтересован в проектах платформы инвестиций и финтех-сервисах."
          />

          <ApplicationCard
            vacancyTitle="Frontend Developer"
            companyName="Wildberries"
            companyLogoBg="#9333ea"
            companyLogoText="WB"
            status="reviewing"
            statusLabel="На рассмотрении"
            createdAt="12 ноября 2026"
            coverLetter="Здравствуйте! Откликаюсь на вакансию продуктового разработчика интерфейсов маркетплейса."
          />
        </div>
      </Container>
    </section>
  );
};

export default ApplicationsPage;
