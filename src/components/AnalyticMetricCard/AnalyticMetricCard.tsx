import type { FC, ReactNode } from 'react';
import styles from './AnalyticMetricCard.module.css';

export interface AnalyticMetricCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  trend?: string;
}

export const AnalyticMetricCard: FC<AnalyticMetricCardProps> = ({ icon, label, value, trend }) => {
  return (
    <article className={styles.card}>
      <div className={styles.iconBox} aria-hidden="true">
        {icon}
      </div>
      <div className={styles.content}>
        <span className={styles.label}>{label}</span>
        <div className={styles.valueRow}>
          <span className={styles.value}>{value}</span>
          {trend && <span className={styles.trend}>{trend}</span>}
        </div>
      </div>
    </article>
  );
};

export default AnalyticMetricCard;
