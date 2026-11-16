import VacancyCard from '@/components/VacancyCard/VacancyCard';
import type { Vacancy } from '@/types/vacancies';
import type { FC } from 'react';

import styles from './VacanciesList.module.css';

interface VacanciesListProps {
  vacanciesList: Vacancy[];
}

export const VacanciesList: FC<VacanciesListProps> = ({ vacanciesList }) => {
  return (
    <ul className={styles.list}>
      {vacanciesList.map((vacancy) => (
        <VacancyCard key={vacancy.id} vacancyData={vacancy} />
      ))}
    </ul>
  );
};
