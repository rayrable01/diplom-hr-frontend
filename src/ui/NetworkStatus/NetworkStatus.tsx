import { createPortal } from 'react-dom';
import styles from './NetworkStatus.module.css';
import { useNetworkStatus } from '@/hooks/useNetworkStatus';
import { type LucideIcon } from 'lucide-react';
import type { FC } from 'react';

interface ServiceBottomError {
  errorMessage: string;
  errorIcon: LucideIcon;
  customError?: boolean;
}

export const NetworkStatus: FC<ServiceBottomError> = ({
  errorMessage = 'Проблемы с сервером. Попробуйте позже!',
  errorIcon: ErrorIcon,
  customError = false,
}) => {
  const isOnline = useNetworkStatus();

  if (isOnline && !customError) return null;

  return createPortal(
    <div className={styles.offlineBanner} role="alert" aria-live="assertive">
      <ErrorIcon size={14} />
      <span>{errorMessage}</span>
    </div>,
    document.body,
  );
};
