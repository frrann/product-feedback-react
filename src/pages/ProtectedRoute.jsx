import { useEffect } from 'react';
import { useUser } from '../features/authentication/useUser';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate('/login');
  }, [isAuthenticated, isLoading, navigate]);

  // show spinner while loading
  if (isLoading) return <p>Loading</p>;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
