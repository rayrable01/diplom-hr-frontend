import type { RouteConfig } from '@/routes/routes';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './NavigationItem.module.css';

interface NavigationItemProps {
  route: RouteConfig;
}

export const NavigationItem: FC<NavigationItemProps> = ({ route }) => {
  return (
    <li className={styles.routeItem}>
      <Link to={route.path}>
        <span>{route.title}</span>
      </Link>
    </li>
  );
};
