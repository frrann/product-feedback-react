import { useQuery } from '@tanstack/react-query';

import { getCurrentUserData } from '../../services/apiAuth';

export function useUserProfile() {
  const { data: userProfile, isLoading } = useQuery({
    queryKey: ['user', 'profile'],
    queryFn: getCurrentUserData,
    meta: {
      errorMessage: "Failed to fetch user's profile",
    },
  });

  return { userProfile, isLoading };
}
