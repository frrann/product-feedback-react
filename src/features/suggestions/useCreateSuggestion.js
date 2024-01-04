import { useMutation } from '@tanstack/react-query';
import { createSuggestion as createSuggestionApi } from '../../services/apiSuggestions';

export function useCreateSuggestion() {
  const { mutate: createSuggestion, isLoading } = useMutation({
    mutationFn: createSuggestionApi,
    onSuccess: () => console.log('Created'),
    onError: (err) => console.error(err.message),
  });

  return { createSuggestion, isLoading };
}
