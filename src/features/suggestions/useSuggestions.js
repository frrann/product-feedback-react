import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

import { getSuggestions } from '../../services/apiSuggestions';

export function useSuggestions() {
  const [searchParams] = useSearchParams();

  // FILTER
  const filterBy = searchParams.get('filterBy') || 'all';

  // SORT
  const sortBy = searchParams.get('sortBy') || 'most-upvotes';

  const {
    isLoading,
    data: suggestions,
    error,
  } = useQuery({
    queryKey: ['suggestions', filterBy, sortBy],
    queryFn: () => getSuggestions({ filterBy }),
    meta: {
      errorMessage: 'Failed to fetch suggestions',
    },
  });

  return { isLoading, suggestions, error };
}
