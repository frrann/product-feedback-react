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
    queryFn: () => getFeedback(id),
    retry: false,
  });

  return { feedback, isLoading, error };
}
