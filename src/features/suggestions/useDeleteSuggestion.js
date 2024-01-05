import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteSuggestion as deleteSuggestionApi } from '../../services/apiSuggestions';

export function useDeleteSuggestion() {
  const queryClient = useQueryClient();
  const { mutate: deleteSuggestion, isLoading } = useMutation({
    mutationFn: deleteSuggestionApi,
    onSuccess: () => {
      console.log('Deleted');
      queryClient.invalidateQueries({
        queryKey: ['suggestions'],
      });
    },
  });

  return { deleteSuggestion, isLoading };
}
