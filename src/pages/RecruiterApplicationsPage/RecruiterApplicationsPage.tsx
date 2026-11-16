import Container from '@/ui/Container/Container';
import RecruiterApplicationCard from '@/components/RecruiterApplicationCard/RecruiterApplicationCard';
import clsx from 'clsx';
import styles from './RecruiterApplicationsPage.module.css';

const RecruiterApplicationsPage = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.mainTitle}>Входящие отклики</h1>
          <p className={styles.subtitle}>
            Отклики кандидатов с автоматическим AI-скорингом резюме и оценкой совпадения навыков
          </p>
        </header>

        {/* Табы этапов воронки */}
        <div className={styles.tabsList} role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected="true"
            className={clsx(styles.tabButton, styles.tabButtonActive)}
          >
            <span>Все отклики</span>
            <span className={styles.badge}>3</span>
          </button>
          <button type="button" role="tab" aria-selected="false" className={styles.tabButton}>
            <span>Новые</span>
            <span className={clsx(styles.badge, styles.badgeInactive)}>2</span>
          </button>
          <button type="button" role="tab" aria-selected="false" className={styles.tabButton}>
            <span>Интервью</span>
            <span className={clsx(styles.badge, styles.badgeInactive)}>1</span>
          </button>
        </div>

        {/* Список откликов кандидатов */}
        <div className={styles.cardsList}>
          <RecruiterApplicationCard
            candidateName="Иван Иванов"
            candidateEmail="ivan@example.com"
            vacancyTitle="Senior Frontend Developer"
            score={95}
            matchedSkills={['React', 'TypeScript', 'Redux Toolkit', 'Next.js']}
            missingSkills={[]}
            coverLetter="Добрый день! Имею 5 лет опыта проектирования интерфейсов. Рассматриваю ваши задачи по масштабированию клиентской части платформы."
            statusLabel="Новый отклик"
            createdAt="11 ноября 2026"
            avatarBg="#2563eb"
          />

          <RecruiterApplicationCard
            candidateName="Мария Семенова"
            candidateEmail="maria.dev@gmail.com"
            vacancyTitle="Middle Frontend Developer"
            score={88}
            matchedSkills={['React', 'TypeScript', 'CSS Modules']}
            missingSkills={['RTK Query']}
            coverLetter="Здравствуйте! Хочу развиваться в сильной инженерной команде. Готова быстро освоить стек и погрузиться в процессы."
            statusLabel="Интервью назначено"
            createdAt="10 ноября 2026"
            avatarBg="#9333ea"
          />

          <RecruiterApplicationCard
            candidateName="Константин Павлов"
            candidateEmail="kpavlov@inbox.ru"
            vacancyTitle="Lead React Architect"
            score={84}
            matchedSkills={['React', 'TypeScript', 'System Design']}
            missingSkills={['Microfrontends']}
            coverLetter="Приветствую! Руководил фронтенд-разработкой финтех-продукта более 3 лет. Буду рад обсудить цели команды."
            statusLabel="Новый отклик"
            createdAt="12 ноября 2026"
            avatarBg="#10b981"
          />
        </div>
      </Container>
    </section>
  );
};

export default RecruiterApplicationsPage;
