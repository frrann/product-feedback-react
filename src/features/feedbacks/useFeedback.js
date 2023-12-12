import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getFeedback } from '../../services/apiFeedbacks';

export function useFeedback() {
  const { id } = useParams();

  const {
    isLoading,
    data: feedback,
    error,
  } = useQuery({
    queryKey: ['feedback', id],
    queryFn: async () => {
      const data = await getFeedback(id);

      const newComments = data?.comments.filter(
        (comment) => comment.replying_to_id === null,
      );

      const replies = data?.comments.filter(
        (comment) => comment.replying_to_id !== null,
      );

      newComments.forEach((comment) => {
        comment.replies = [];
        replies.forEach((reply) => {
          if (reply.replying_to_id === comment.id) {
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

  return { feedback, isLoading, error };
}
