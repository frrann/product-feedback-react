import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { createEditSuggestion } from '../../services/apiSuggestions';

export function useEditSuggestion() {
  const queryClient = useQueryClient();
  const { mutate: editSuggestion, isLoading } = useMutation({
    mutationFn: ({ newSuggestionData, id }) =>
      createEditSuggestion(newSuggestionData, id),
    onSuccess: () => {
      toast.success('Suggestion successfully updated.');
      queryClient.invalidateQueries({
        queryKey: ['suggestions'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editSuggestion, isLoading };
}
