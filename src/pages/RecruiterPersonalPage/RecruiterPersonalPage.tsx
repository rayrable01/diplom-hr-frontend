import Container from '@/ui/Container/Container';
import UserProfileCard from '@/components/UserProfileCard/UserProfileCard';
import styles from './RecruiterPersonalPage.module.css';

const RecruiterPersonalPage = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.mainTitle}>Личный кабинет рекрутера</h1>
          <p className={styles.subtitle}>
            Управление профилем компании, контактными данными и параметрами найма
          </p>
        </header>

        <UserProfileCard
          fullName="Анна Петрова"
          email="anna.hr@company.com"
          role="hr"
          createdAt="15 февраля 2026"
        />
      </Container>
    </section>
  );
};

export default RecruiterPersonalPage;
