import type { FC } from 'react';
import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes';
import { ProtectedRoute } from './ProtectedRoute';
import { PageSkeleton } from '@/ui/Skeleton/PageSkeleton';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      {routes.map(({ path, component: Component, role, isPublic }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<PageSkeleton />}>
              <ProtectedRoute role={role} isPublic={isPublic}>
                <Component />
              </ProtectedRoute>
            </Suspense>
          }
        />
      ))}
      <Route path="/" element={<Navigate to="/vacancies" replace />} />
      <Route path="*" element={<Navigate to="/vacancies" replace />} />
    </Routes>
  );
};

export default AppRoutes;
