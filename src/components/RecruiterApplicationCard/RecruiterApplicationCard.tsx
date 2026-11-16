import type { FC } from 'react';
import { Sparkles, Check, X } from 'lucide-react';
import styles from './RecruiterApplicationCard.module.css';

export interface RecruiterApplicationCardProps {
  candidateName?: string;
  candidateEmail?: string;
  vacancyTitle?: string;
  score?: number;
  matchedSkills?: string[];
  missingSkills?: string[];
  coverLetter?: string;
  statusLabel?: string;
  createdAt?: string;
  avatarBg?: string;
}

export const RecruiterApplicationCard: FC<RecruiterApplicationCardProps> = ({
  candidateName = 'Иван Иванов',
  candidateEmail = 'candidate@example.com',
  vacancyTitle = 'Senior Frontend Developer',
  score = 92,
  matchedSkills = ['React', 'TypeScript', 'Redux', 'Next.js'],
  missingSkills = ['Docker'],
  coverLetter = 'Имею богатый практический опыт разработки интерфейсов. Рассматриваю долгосрочное сотрудничество в продуктовой разработке.',
  statusLabel = 'Новый отклик',
  createdAt = '11 ноября 2026',
  avatarBg = '#2563eb',
}) => {
  const initials = candidateName
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
          <div className={styles.nameRow}>
            <h3 className={styles.candidateName}>{candidateName}</h3>
            <span className={styles.vacancyBadge}>{vacancyTitle}</span>
          </div>

          <div className={styles.email}>
            {candidateEmail} • Откликнулся: {createdAt}
          </div>

          {/* AI-скоринг */}
          <div className={styles.scoringBox}>
            <div className={styles.scoreRow}>
              <Sparkles size={15} />
              <span>AI-скоринг: {score}% соответствие вакансии</span>
            </div>
            <div className={styles.skillsBreakdown}>
              <span className={styles.matchedSkills}>
                <Check size={12} style={{ display: 'inline', marginRight: 4 }} />
                Совпали: {matchedSkills.join(', ')}
              </span>
              {missingSkills.length > 0 && (
                <span className={styles.missingSkills}>
                  <X size={12} style={{ display: 'inline', marginRight: 4 }} />
                  Не хватает: {missingSkills.join(', ')}
                </span>
              )}
            </div>
          </div>

          {coverLetter && <p className={styles.coverLetter}>{coverLetter}</p>}
        </div>
      </div>

      <div className={styles.rightSection}>
        <span className={styles.statusPill}>{statusLabel}</span>

        <div className={styles.actions}>
          <button type="button" className={styles.acceptButton}>
            Пригласить на интервью
          </button>
          <button type="button" className={styles.rejectButton}>
            Отклонить
          </button>
        </div>
      </div>
    </article>
  );
};

export default RecruiterApplicationCard;
