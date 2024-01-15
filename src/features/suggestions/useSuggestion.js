import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getSuggestion } from '../../services/apiSuggestions';

export function useSuggestion() {
  const { id } = useParams();

  const {
    isLoading,
    data: suggestion,
    error,
  } = useQuery({
    queryKey: ['suggestion', id],
    queryFn: async () => {
      const data = await getSuggestion(id);

      const newComments = data?.comments.filter(
        (comment) => comment.thread_id === null,
      );

      const replies = data?.comments.filter(
        (comment) => comment.thread_id !== null,
      );

      newComments.forEach((comment) => {
        comment.replies = [];
        replies.forEach((reply) => {
          if (reply.thread_id === comment.id) {
            comment.replies.push(reply);
          }
        });
      });

      data.totalComments = data.comments.length;
      data.comments = newComments;

      return data;
    },
    retry: false,
  });

  return { suggestion, isLoading, error };
}
