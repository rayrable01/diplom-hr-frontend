import VacanciesHeader from '@/components/VacanciesHeader/VacanciesHeader';
import VacanciesFilterBar from '@/components/VacanciesFilterBar/VacanciesFilterBar';
import VacancyPagination from '@/components/VacancyPagination/VacancyPagination';
import styles from './VacanciesTemplate.module.css';
import { useGetVacanciesQuery } from '@/api/vacanices';
import { VacanciesList } from './VacanciesList/VacanciesList';
import { VacanciesEmptyState } from './VacanciesEmptyState/VacanciesEmptyState';
import { VacanciesError } from './VacanciesError/VacanciesError';
import { SpinnerLoader } from '@/ui/SpinnerLoader/SpinnerLoader';

export const VacanciesTemplate = () => {
  const { data, isLoading, isError, refetch } = useGetVacanciesQuery({});

  const hasVacancies = Boolean(data && data.length > 0);
  const isEmpty = !isLoading && !isError && (!data || data.length === 0);

  return (
    <div className={styles.container}>
      <VacanciesHeader />
      <VacanciesFilterBar />

      <div className={styles.cardsList} aria-label="Список вакансий">
        {isLoading && <SpinnerLoader />}

        {isError && <VacanciesError onRetry={() => refetch()} />}

        {isEmpty && <VacanciesEmptyState />}

        {hasVacancies && data && !isLoading && !isError && <VacanciesList vacanciesList={data} />}
      </div>

      <VacancyPagination />
    </div>
  );
};

export default VacanciesTemplate;
