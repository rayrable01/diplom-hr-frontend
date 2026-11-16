import type { FC } from 'react';
import { Sparkles } from 'lucide-react';
import styles from './CandidateCard.module.css';

export interface CandidateCardProps {
  fullName?: string;
  targetTitle?: string;
  experienceYears?: number;
  expectedSalary?: number;
  education?: string;
  skills?: string[];
  matchScore?: number;
  avatarBg?: string;
}

export const CandidateCard: FC<CandidateCardProps> = ({
  fullName = 'Алексей Смирнов',
  targetTitle = 'Senior Frontend Developer',
  experienceYears = 5,
  expectedSalary = 260000,
  education = 'МГТУ им. Н.Э. Баумана',
  skills = ['React', 'TypeScript', 'Redux Toolkit', 'Next.js', 'RTK Query'],
  matchScore = 94,
  avatarBg = '#2563eb',
}) => {
  const initials = fullName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  return (
    <article className={styles.card}>
      <div className={styles.leftSection}>
        <div className={styles.avatar} style={{ backgroundColor: avatarBg }} aria-hidden="true">
          {initials}
        </div>

        <div className={styles.info}>
          <div className={styles.headerRow}>
            <span className={styles.name}>{fullName}</span>
          </div>

          <h3 className={styles.targetTitle}>{targetTitle}</h3>

          <div className={styles.metaRow}>
            <span>Опыт: {experienceYears} лет</span>
            <span>•</span>
            <span className={styles.education}>{education}</span>
          </div>

          <div className={styles.skillsRow}>
            {skills.map((skill) => (
              <span key={skill} className={styles.skillBadge}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.rightSection}>
        <span className={styles.salary}>от {expectedSalary.toLocaleString('ru-RU')} ₽</span>

        {matchScore && (
          <span className={styles.matchScoreBadge}>
            <Sparkles size={13} />
            <span>{matchScore}% совпадение</span>
          </span>
        )}

        <div className={styles.actions}>
          <button type="button" className={styles.profileButton}>
            Резюме
          </button>
          <button type="button" className={styles.inviteButton}>
            Пригласить
          </button>
        </div>
      </div>
    </article>
  );
};

export default CandidateCard;
