import { useQuery } from '@tanstack/react-query';

import { getGroupedSuggestions } from '../../services/apiSuggestions';

export function useGroupedSuggestions() {
  const { data: groupedSuggestions, isLoading } = useQuery({
    queryKey: ['suggestions', 'grouped'],
    queryFn: getGroupedSuggestions,
  });

  return { groupedSuggestions, isLoading };
}
