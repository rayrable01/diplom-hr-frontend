import { useGetMeQuery } from './api/auth';
import './App.css';
import { Header } from './layout/Header/Header';
import { routes } from './routes/routes';
import { AppRoutes } from './routes/AppRoutes';
import { NetworkStatus } from './ui/NetworkStatus/NetworkStatus';
import { Server, Wifi } from 'lucide-react';
import { useCheckHealthQuery } from './api/serviceApi/health';
import { useGetConfigQuery } from './api/serviceApi/config';

function App() {
  const { data: user, isLoading } = useGetMeQuery();
  const { isError } = useCheckHealthQuery(undefined, { pollingInterval: 5000 });
  const { isLoading: isConfigLoading } = useGetConfigQuery();

  const globalLoading = isLoading || isConfigLoading;

  const navigationRoutes = routes.filter((route) => {
    if (!user) {
      return Boolean(route.isPublic);
    }
    return route.role === user.role;
  });

  return (
    <>
      <Header navigationRoutes={navigationRoutes} isLoading={globalLoading} />
      <main>
        <AppRoutes />
        <NetworkStatus errorMessage="Ошибка подключения. Проверьте статус сети!" errorIcon={Wifi} />
        {isError && (
          <NetworkStatus
            errorMessage="Проблемы сервера. Попробуйте позже! :("
            errorIcon={Server}
            customError
          />
        )}
      </main>
    </>
  );
}

export default App;
