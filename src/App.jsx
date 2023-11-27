import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import ProtectedRoute from './pages/ProtectedRoute';
import LoginLayout from './ui/LoginLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import AppLayout from './ui/AppLayout';
import Suggestions from './pages/Suggestions';
import PageNotFound from './pages/PageNotFound';

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

      <BrowserRouter>
        <Routes>
          {/* protected routes */}
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="suggestions" />} />
            <Route path="/suggestions" element={<Suggestions />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>

          {/* login/register routes */}
          <Route element={<LoginLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
