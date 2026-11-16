import Container from '@/ui/Container/Container';
import { SpinnerLoader } from '@/ui/SpinnerLoader/SpinnerLoader';

import styles from './PageLoader.module.css';

export const PageLoader = () => {
  return (
    <Container className={styles.container}>
      <SpinnerLoader />
    </Container>
  );
};
