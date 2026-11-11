import type { CSSProperties, FC, HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Skeleton.module.css';

export type SkeletonVariant = 'rect' | 'circle' | 'text';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  radius?: string | number;
  variant?: SkeletonVariant;
  className?: string;
  style?: CSSProperties;
}

const formatDimension = (value?: string | number): string | undefined => {
  if (value === undefined) return undefined;
  return typeof value === 'number' ? `${value}px` : value;
};

export const Skeleton: FC<SkeletonProps> = ({
  width,
  height,
  radius,
  variant = 'rect',
  className,
  style,
  ...restProps
}) => {
  const dynamicStyles: CSSProperties = {
    ...style,
    width: formatDimension(width),
    height: formatDimension(height),
    borderRadius: formatDimension(radius),
  };

  return (
    <div
      className={clsx(styles.skeleton, styles[variant], className)}
      style={dynamicStyles}
      aria-hidden="true"
      {...restProps}
    />
  );
};

export default Skeleton;
