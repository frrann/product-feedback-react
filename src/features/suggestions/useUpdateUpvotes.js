import { useMutation, useQueryClient } from '@tanstack/react-query';

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
    onError: (err) => console.error(err),
  });

  return { updateUpvotes, isLoading };
}
