import Container from '@/ui/Container/Container';
import styles from './PageError.module.css';
import { FileWarningIcon } from 'lucide-react';

export const PageError = () => {
  return (
    <Container className={styles.container}>
      <FileWarningIcon />
    </Container>
  );
};
