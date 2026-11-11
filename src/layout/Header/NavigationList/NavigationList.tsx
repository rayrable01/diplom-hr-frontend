import type { RouteConfig } from '@/routes/routes';
import type { FC } from 'react';
import { Skeleton } from '@/ui/Skeleton/Skeleton';
import { NavigationItem } from '../NavigationItem/NavigationItem';
import styles from './NavigationList.module.css';

interface NavigationListProps {
  navigationRoutes: RouteConfig[];
  isLoading?: boolean;
}

export const NavigationList: FC<NavigationListProps> = ({ navigationRoutes, isLoading }) => {
  // техдолг, сделать Map и сколько рутов столько и циклов будет
  if (isLoading) {
    return (
      <ul className={styles.list}>
        <li className={styles.skeletonItem}>
          <Skeleton width="120px" height="20px" radius="4px" />
        </li>
        <li className={styles.skeletonItem}>
          <Skeleton width="90px" height="20px" radius="4px" />
        </li>
        <li className={styles.skeletonItem}>
          <Skeleton width="80px" height="20px" radius="4px" />
        </li>
      </ul>
    );
  }

  return (
    <ul className={styles.list}>
      {navigationRoutes.map((route) => (
        <NavigationItem key={route.path} route={route} />
      ))}
    </ul>
  );
};
