import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createEditSuggestion } from '../../services/apiSuggestions';

export function useEditSuggestion() {
  const queryClient = useQueryClient();
  const { mutate: editSuggestion, isLoading } = useMutation({
    mutationFn: ({ newSuggestionData, id }) =>
      createEditSuggestion(newSuggestionData, id),
    onSuccess: () => {
      console.log('Edited');
      queryClient.invalidateQueries({
        queryKey: ['suggestions'],
      });
    },
    onError: (err) => console.error(err),
  });

  return { editSuggestion, isLoading };
}
