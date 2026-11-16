import type { FC } from 'react';
import { MapPin, Heart, CheckIcon } from 'lucide-react';
import styles from './VacancyCard.module.css';
import type { Vacancy } from '@/types/vacancies';

export interface VacancyCardProps {
  vacancyData: Vacancy;
}

export const VacancyCard: FC<VacancyCardProps> = ({ vacancyData }) => {
  const firstLetter = vacancyData.company[0];

  return (
    <article className={styles.card}>
      <div
        className={styles.logo}
        style={{
          backgroundColor: 'red',
          color: 'white',
          borderRadius: 'red',
        }}
        aria-hidden="true"
      >
        {firstLetter}
      </div>

      {/* Основная информация */}
      <div className={styles.mainInfo}>
        <h3 className={styles.title}>{vacancyData.title}</h3>

        <div className={styles.companyRow}>
          <span>{vacancyData.company}</span>
          <CheckIcon size={15} />
        </div>

        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <span>Москва</span>
            <MapPin size={14} />
          </div>
          <span className={styles.metaDot}>•</span>
          <span>от {vacancyData.requiredExperienceInYears} года опыта</span>
        </div>

        {/* Теги технологий */}
        <div className={styles.tagsRow}>
          {vacancyData.requiredSkills.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Колонка действий и зарплаты */}
      <div className={styles.actionsColumn}>
        <div className={styles.actionsTopRow}>
          <span className={styles.salary}>{vacancyData.salaryMax} руб.</span>
          <button type="button" className={styles.favoriteButton} aria-label="Добавить в избранное">
            <Heart size={20} />
          </button>
          <button type="button" className={styles.applyButton}>
            Откликнуться
          </button>
        </div>
      </div>
    </article>
  );
};

export default VacancyCard;
