import type { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useGetMeQuery } from '@/api/auth';
import { PageSkeleton } from '@/ui/Skeleton/PageSkeleton';
import { AccessDenied } from '@/components/AccessDenied/AccessDenied';
import type { Role } from '@/types/types';

interface ProtectedRouteProps {
  children: ReactNode;
  role?: Role;
  isPublic?: boolean;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children, role, isPublic = false }) => {
  const { data: user, isLoading } = useGetMeQuery();

  if (isPublic) {
    return <>{children}</>;
  }

  if (isLoading) {
    return <PageSkeleton />;
  }

  if (!user) {
    return <Navigate to="/vacancies" replace />;
  }

  if (role && user.role !== role) {
    const fallbackPath = user.role === 'hr' ? '/recruiter/vacancies' : '/vacancies';
    const fallbackLabel =
      user.role === 'hr' ? 'Перейти в кабинет рекрутера' : 'Перейти к списку вакансий';

    return <AccessDenied fallbackPath={fallbackPath} fallbackLabel={fallbackLabel} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
