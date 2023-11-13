import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './pages/Login';
import AppLayout from './ui/AppLayout';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} panelPosition="bottom" />
      <AppLayout>
        <Login />
      </AppLayout>
    </QueryClientProvider>
  );
}

export default App;
