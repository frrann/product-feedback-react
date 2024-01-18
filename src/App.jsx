import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import toast, { Toaster } from 'react-hot-toast';

import ProtectedRoute from './pages/ProtectedRoute';
import LoginLayout from './ui/LoginLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import AppLayout from './ui/AppLayout';
import Suggestions from './pages/Suggestions';
import PageNotFound from './pages/PageNotFound';
import Suggestion from './pages/Suggestion';
import CreateSuggestion from './pages/CreateSuggestion';
import EditSuggestion from './pages/EditSuggestion';
import Roadmap from './pages/Roadmap';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (query.meta.errorMessage) toast.error(query.meta.errorMessage);
    },
  }),
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} panelPosition="bottom" />

      <BrowserRouter>
        <Routes>
          {/* login/register routes */}
          <Route element={<LoginLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

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
            <Route path="/suggestions/:id" element={<Suggestion />} />
            <Route path="/suggestions/:id/edit" element={<EditSuggestion />} />
            <Route path="/suggestions/new" element={<CreateSuggestion />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
