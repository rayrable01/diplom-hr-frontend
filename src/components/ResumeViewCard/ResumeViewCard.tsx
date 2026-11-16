import type { FC } from 'react';
import { Briefcase, Wallet, GraduationCap, Download, Edit3, CheckCircle2 } from 'lucide-react';
import styles from './ResumeViewCard.module.css';

export interface ResumeViewCardProps {
  title?: string;
  experienceYears?: number;
  expectedSalary?: number;
  skills?: string[];
  education?: string;
  about?: string;
  updatedAt?: string;
}

export const ResumeViewCard: FC<ResumeViewCardProps> = ({
  title = 'Senior Frontend Developer',
  experienceYears = 5,
  expectedSalary = 260000,
  skills = [
    'React',
    'TypeScript',
    'Redux Toolkit',
    'Next.js',
    'RTK Query',
    'CSS Modules',
    'Webpack',
    'Jest',
    'Git',
  ],
  education = 'МГТУ им. Н.Э. Баумана, Информатика и системы управления',
  about = 'Более 5 лет проектирую и разрабатываю высоконагруженные SPA и интерфейсные системы на React и TypeScript. Фокусируюсь на чистой компонентной архитектуре, производительности рендеринга и строгой типизации.',
  updatedAt = '10 ноября 2026',
}) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <div className={styles.titleSection}>
          <div className={styles.titleRow}>
            <h2 className={styles.title}>{title}</h2>
            <span className={styles.statusBadge}>
              <CheckCircle2 size={14} />
              <span>В активном поиске</span>
            </span>
          </div>
          <p className={styles.updatedAt}>Резюме обновлено: {updatedAt}</p>
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.downloadButton}>
            <Download size={16} />
            <span>PDF</span>
          </button>
          <button type="button" className={styles.editButton}>
            <Edit3 size={16} style={{ marginRight: 6 }} />
            <span>Редактировать</span>
          </button>
        </div>
      </header>

      {/* Быстрые метрики */}
      <div className={styles.statsGrid}>
        <div className={styles.statItem}>
          <div className={styles.statIcon}>
            <Briefcase size={20} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Опыт работы</span>
            <span className={styles.statValue}>{experienceYears} лет</span>
          </div>
        </div>

        <div className={styles.statItem}>
          <div className={styles.statIcon}>
            <Wallet size={20} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Ожидаемая зарплата</span>
            <span className={styles.statValue}>{expectedSalary.toLocaleString('ru-RU')} ₽</span>
          </div>
        </div>

        <div className={styles.statItem}>
          <div className={styles.statIcon}>
            <GraduationCap size={20} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Образование</span>
            <span className={styles.statValue}>{education}</span>
          </div>
        </div>
      </div>

      {/* Ключевые навыки */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Ключевые навыки</h3>
        <div className={styles.skillsList}>
          {skills.map((skill) => (
            <span key={skill} className={styles.skillBadge}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* О себе */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>О себе</h3>
        <p className={styles.aboutText}>{about}</p>
      </section>
    </article>
  );
};

export default ResumeViewCard;
