import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditSuggestion } from '../../services/apiSuggestions';

export function useCreateSuggestion() {
  const queryClient = useQueryClient();
  const { mutate: createSuggestion, isLoading } = useMutation({
    mutationFn: createEditSuggestion,
    onSuccess: () => {
      console.log('Created');
      queryClient.invalidateQueries({
        queryKey: ['suggestions'],
      });
    },
    onError: (err) => console.error(err.message),
  });

  return { createSuggestion, isLoading };
}
