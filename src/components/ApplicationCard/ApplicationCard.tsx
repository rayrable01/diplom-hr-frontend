import type { FC } from 'react';
import { Clock, Calendar, CheckCircle, XCircle } from 'lucide-react';
import clsx from 'clsx';
import styles from './ApplicationCard.module.css';

export interface ApplicationCardProps {
  vacancyTitle?: string;
  companyName?: string;
  companyLogoBg?: string;
  companyLogoText?: string;
  status?: 'reviewing' | 'interview' | 'offer' | 'rejected';
  statusLabel?: string;
  createdAt?: string;
  coverLetter?: string;
}

export const ApplicationCard: FC<ApplicationCardProps> = ({
  vacancyTitle = 'Frontend Developer',
  companyName = 'Яндекс',
  companyLogoBg = '#ea4335',
  companyLogoText = 'Я',
  status = 'reviewing',
  statusLabel = 'На рассмотрении',
  createdAt = '11 ноября 2026',
  coverLetter = 'Здравствуйте! Имею 4 года опыта в разработке сложных фронтенд-приложений на React и TypeScript. Буду рад обсудить возможность присоединиться к вашей команде.',
}) => {
  const getStatusClass = () => {
    switch (status) {
      case 'interview':
        return styles.statusInterview;
      case 'offer':
        return styles.statusOffer;
      case 'rejected':
        return styles.statusRejected;
      case 'reviewing':
      default:
        return styles.statusReviewing;
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'interview':
        return <Calendar size={14} />;
      case 'offer':
        return <CheckCircle size={14} />;
      case 'rejected':
        return <XCircle size={14} />;
      case 'reviewing':
      default:
        return <Clock size={14} />;
    }
  };

  return (
    <article className={styles.card}>
      <div className={styles.leftContent}>
        <div
          className={styles.companyBadge}
          style={{ backgroundColor: companyLogoBg }}
          aria-hidden="true"
        >
          {companyLogoText}
        </div>

        <div className={styles.info}>
          <div className={styles.titleRow}>
            <h3 className={styles.vacancyTitle}>{vacancyTitle}</h3>
          </div>

          <span className={styles.companyName}>{companyName}</span>

          <div className={styles.metaRow}>
            <span>Отклик отправлен: {createdAt}</span>
          </div>

          {coverLetter && (
            <div className={styles.coverLetterBox}>
              <div className={styles.coverLetterLabel}>Сопроводительное письмо:</div>
              <div>{coverLetter}</div>
            </div>
          )}
        </div>
      </div>

      <div className={styles.rightContent}>
        <span className={clsx(styles.statusPill, getStatusClass())}>
          {getStatusIcon()}
          <span>{statusLabel}</span>
        </span>

        <div className={styles.actions}>
          <button type="button" className={styles.detailsButton}>
            Вакансия
          </button>
          <button type="button" className={styles.cancelButton}>
            Отозвать
          </button>
        </div>
      </div>
    </article>
  );
};

export default ApplicationCard;
