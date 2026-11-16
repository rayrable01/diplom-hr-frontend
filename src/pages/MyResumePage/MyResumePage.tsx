import Container from '@/ui/Container/Container';
import ResumeViewCard from '@/components/ResumeViewCard/ResumeViewCard';
import styles from './MyResumePage.module.css';

const MyResumePage = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <header className={styles.header}>
          <div className={styles.titleSection}>
            <h1 className={styles.mainTitle}>Мои резюме</h1>
            <p className={styles.subtitle}>
              Управляйте вашими резюме и отслеживайте их видимость для рекрутеров
            </p>
          </div>
          <button type="button" className={styles.createButton}>
            + Создать новое резюме
          </button>
        </header>

        <ResumeViewCard />
      </Container>
    </section>
  );
};

export default MyResumePage;
