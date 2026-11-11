import type { FC } from 'react';
import { Container } from '@/ui/Container/Container';
import { Skeleton } from './Skeleton';
import styles from './PageSkeleton.module.css';

export const PageSkeleton: FC = () => {
  return (
    <Container className={styles.pageSkeleton} size="lg">
      <div className={styles.headerArea}>
        <Skeleton width="35%" height="32px" radius="6px" />
        <Skeleton width="20%" height="18px" radius="4px" />
      </div>

      <div className={styles.cardsList}>
        <Skeleton width="100%" height="110px" radius="10px" />
        <Skeleton width="100%" height="110px" radius="10px" />
        <Skeleton width="100%" height="110px" radius="10px" />
      </div>
    </Container>
  );
};

export default PageSkeleton;
