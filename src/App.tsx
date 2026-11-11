import { useGetMeQuery } from './api/serviceApi/auth';
import './App.css';
import { Header } from './layout/Header/Header';
import { routes } from './routes/routes';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  const { data: user, isLoading } = useGetMeQuery();

  const navigationRoutes = routes.filter((route) => {
    if (!user) {
      return Boolean(route.isPublic);
    }
    return route.role === user.role;
  });

  return (
    <>
      <Header navigationRoutes={navigationRoutes} isLoading={isLoading} />
      <main>
        <AppRoutes />
      </main>
    </>
  );
}

export default App;
