import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { updateUpvotes as updateUpvotesApi } from '../../services/apiSuggestions';

export function useUpdateUpvotes() {
  const queryClient = useQueryClient();

  const { mutate: updateUpvotes, isLoading } = useMutation({
    mutationFn: ({ upvotes, id }) => updateUpvotesApi(upvotes, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['suggestions'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUpvotes, isLoading };
}
