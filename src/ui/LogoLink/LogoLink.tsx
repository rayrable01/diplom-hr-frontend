import type { AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import HhLogo from '@/assets/hh.ru__min_a2bc1a7ab3780dd0.svg?react';
import styles from './LogoLink.module.css';

export interface LogoLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to?: string;
  className?: string;
  ariaLabel?: string;
}

export const LogoLink = ({
  to = '/vacancies',
  className,
  ariaLabel = 'HeadHunter — Главная страница вакансий',
  ...restProps
}: LogoLinkProps) => {
  return (
    <Link
      to={to}
      className={clsx(styles.logoLink, className)}
      aria-label={ariaLabel}
      {...restProps}
    >
      <HhLogo className={styles.icon} aria-hidden="true" />
    </Link>
  );
};

export default LogoLink;
