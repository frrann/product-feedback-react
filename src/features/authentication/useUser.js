import { useQuery } from '@tanstack/react-query';

import { getCurrentUser } from '../../services/apiAuth';

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
    meta: {
      errorMessage: 'Failed to fetch user data',
    },
  });

  return { user, isLoading, isAuthenticated: user?.role === 'authenticated' };
}
