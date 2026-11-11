import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';
import { Container } from '@/ui/Container/Container';
import styles from './AccessDenied.module.css';

export interface AccessDeniedProps {
  fallbackPath: string;
  fallbackLabel?: string;
  title?: string;
  message?: string;
}

export const AccessDenied: FC<AccessDeniedProps> = ({
  fallbackPath,
  fallbackLabel = 'Вернуться в свой раздел',
  title = 'Доступ ограничен',
  message = 'У вашего аккаунта недостаточно прав для просмотра этой страницы. Вы можете вернуться в доступный раздел вашего профиля.',
}) => {
  return (
    <Container className={styles.container}>
      <div className={styles.card}>
        <div className={styles.iconWrapper}>
          <ShieldAlert size={32} />
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{message}</p>
        <Link to={fallbackPath} className={styles.actionButton}>
          {fallbackLabel}
        </Link>
      </div>
    </Container>
  );
};

export default AccessDenied;
