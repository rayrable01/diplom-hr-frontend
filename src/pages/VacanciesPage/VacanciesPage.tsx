import Container from '@/ui/Container/Container';
import styles from './VacanciesPage.module.css';
import { FiltersTemplate } from '@/layout/FiltersTemplate/FiltersTemplate';
import { VacanciesTemplate } from '@/layout/VacanciesTemplate/VacanciesTemplate';

const VacanciesPage = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <FiltersTemplate />
        <VacanciesTemplate />
      </Container>
    </section>
  );
};

export default VacanciesPage;
