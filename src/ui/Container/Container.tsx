import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Container.module.css';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  as?: ElementType;
  size?: ContainerSize;
  className?: string;
}

export const Container = ({
  children,
  as: Component = 'div',
  size = 'lg',
  className,
  ...restProps
}: ContainerProps) => {
  return (
    <Component className={clsx(styles.container, styles[size], className)} {...restProps}>
      {children}
    </Component>
  );
};

export default Container;
