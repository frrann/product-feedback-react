import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { postComment } from '../../services/apiComments';

export function useAddComment() {
  const queryClient = useQueryClient();

  const { mutate: addComment, isLoading } = useMutation({
    mutationFn: postComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['suggestion'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { addComment, isLoading };
}
