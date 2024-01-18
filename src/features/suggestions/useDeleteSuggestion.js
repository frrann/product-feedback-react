import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { deleteSuggestion as deleteSuggestionApi } from '../../services/apiSuggestions';

export function useDeleteSuggestion() {
  const queryClient = useQueryClient();

  const { mutate: deleteSuggestion, isLoading } = useMutation({
    mutationFn: deleteSuggestionApi,
    onSuccess: () => {
      toast.success('Suggestion successfully deleted.');
      queryClient.invalidateQueries({
        queryKey: ['suggestions'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteSuggestion, isLoading };
}
