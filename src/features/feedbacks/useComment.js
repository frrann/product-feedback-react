import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postComment } from '../../services/apiComments';

export function useComment() {
  const queryClient = useQueryClient();

  const { mutate: addComment, isLoading } = useMutation({
    mutationFn: postComment,
    onSuccess: () => {
      console.log('Success');
      queryClient.invalidateQueries({ queryKey: ['feedback'] });
    },
    onError: (error) => console.error(error),
  });

  return { addComment, isLoading };
}
