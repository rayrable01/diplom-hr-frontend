import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Skeleton } from './Skeleton';
import { PageSkeleton } from './PageSkeleton';

describe('Skeleton', () => {
  it('рендерит базовый rect скелетон с переданными размерами', () => {
    const { container } = render(
      <Skeleton width={200} height={40} radius={8} data-testid="test-skeleton" />,
    );
    const element = container.firstChild as HTMLElement;
    expect(element).toBeInTheDocument();
    expect(element.style.width).toBe('200px');
    expect(element.style.height).toBe('40px');
    expect(element.style.borderRadius).toBe('8px');
  });

  it('рендерит circle скелетон', () => {
    const { container } = render(<Skeleton variant="circle" width="48px" height="48px" />);
    const element = container.firstChild as HTMLElement;
    expect(element).toBeInTheDocument();
    expect(element.style.width).toBe('48px');
    expect(element.style.height).toBe('48px');
  });

  it('рендерит PageSkeleton без ошибок', () => {
    const { container } = render(<PageSkeleton />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
