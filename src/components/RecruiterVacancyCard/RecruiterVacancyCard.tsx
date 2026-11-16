import type { FC } from 'react';
import { Users, UserCheck, Edit3, Archive } from 'lucide-react';
import styles from './RecruiterVacancyCard.module.css';

export interface RecruiterVacancyCardProps {
  title?: string;
  status?: 'active' | 'draft' | 'closed';
  requiredExperienceInYears?: number;
  salaryMin?: number;
  salaryMax?: number;
  requiredSkills?: string[];
  applicationsCount?: number;
  interviewCount?: number;
  createdAt?: string;
}

export const RecruiterVacancyCard: FC<RecruiterVacancyCardProps> = ({
  title = 'Senior Frontend Developer',
  status = 'active',
  requiredExperienceInYears = 3,
  salaryMin = 220000,
  salaryMax = 280000,
  requiredSkills = ['React', 'TypeScript', 'Redux', 'Next.js'],
  applicationsCount = 24,
  interviewCount = 5,
  createdAt = '5 ноября 2026',
}) => {
  const statusLabel =
    status === 'active' ? 'Активна' : status === 'draft' ? 'Черновик' : 'В архиве';

  return (
    <article className={styles.card}>
      <div className={styles.mainInfo}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{title}</h3>
          <span className={status === 'active' ? styles.statusActive : styles.statusDraft}>
            {statusLabel}
          </span>
        </div>

        <div className={styles.metaRow}>
          <span className={styles.salary}>
            {salaryMin.toLocaleString('ru-RU')} — {salaryMax.toLocaleString('ru-RU')} ₽
          </span>
          <span>•</span>
          <span>Опыт: от {requiredExperienceInYears} лет</span>
          <span>•</span>
          <span>Опубликована: {createdAt}</span>
        </div>

        <div className={styles.skillsRow}>
          {requiredSkills.map((skill) => (
            <span key={skill} className={styles.skillTag}>
              {skill}
            </span>
          ))}
        </div>

        <div className={styles.statsRow}>
          <span className={styles.statBadge}>
            <Users size={16} />
            <span>{applicationsCount} откликов</span>
          </span>
          <span className={styles.statBadge}>
            <UserCheck size={16} />
            <span>{interviewCount} на этапе интервью</span>
          </span>
        </div>
      </div>

      <div className={styles.actionsColumn}>
        <button type="button" className={styles.manageButton}>
          Отклики ({applicationsCount})
        </button>
        <div className={styles.secondaryActions}>
          <button type="button" className={styles.iconBtn} aria-label="Редактировать">
            <Edit3 size={15} />
          </button>
          <button type="button" className={styles.iconBtn} aria-label="Архивировать">
            <Archive size={15} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default RecruiterVacancyCard;
