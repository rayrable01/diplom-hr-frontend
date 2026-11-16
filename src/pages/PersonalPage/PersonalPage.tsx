import Container from '@/ui/Container/Container';
import UserProfileCard from '@/components/UserProfileCard/UserProfileCard';
import styles from './PersonalPage.module.css';

const PersonalPage = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.mainTitle}>Личный кабинет</h1>
          <p className={styles.subtitle}>
            Управление персональными данными, безопасностью аккаунта и уведомлениями
          </p>
        </header>

        <UserProfileCard
          fullName="Иван Иванов"
          email="candidate@example.com"
          role="candidate"
          createdAt="1 марта 2026"
        />
      </Container>
    </section>
  );
};

export default PersonalPage;
