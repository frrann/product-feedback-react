import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { createEditSuggestion } from '../../services/apiSuggestions';

export function useCreateSuggestion() {
  const queryClient = useQueryClient();

  const { mutate: createSuggestion, isLoading } = useMutation({
    mutationFn: createEditSuggestion,
    onSuccess: () => {
      toast.success('New suggestion successfully created.');
      queryClient.invalidateQueries({
        queryKey: ['suggestions'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createSuggestion, isLoading };
}
