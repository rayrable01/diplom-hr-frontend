import { Container } from '@/ui/Container/Container';
import { LogoLink } from '@/ui/LogoLink/LogoLink';
import styles from './Header.module.css';
import type { RouteConfig } from '@/routes/routes';
import type { FC } from 'react';
import { NavigationList } from './NavigationList/NavigationList';
import { AuthButton } from '@/components/AuthButton/AuthButton';

interface HeaderProps {
  navigationRoutes: RouteConfig[];
  isLoading?: boolean;
}

export const Header: FC<HeaderProps> = ({ navigationRoutes, isLoading }) => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <LogoLink />
        <NavigationList navigationRoutes={navigationRoutes} isLoading={isLoading} />
        <AuthButton isLoading={isLoading} />
      </Container>
    </header>
  );
};

export default Header;
