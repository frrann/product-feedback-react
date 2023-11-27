import { useQuery } from '@tanstack/react-query';
import { getFeedbacks } from '../../services/apiFeedback';
import { useSearchParams } from 'react-router-dom';

export function useFeedbacks() {
  const [searchParams] = useSearchParams();

  // FILTER
  const filterBy = searchParams.get('filterBy') || 'all';

  // SORT
  const sortBy = searchParams.get('sortBy') || 'most-upvotes';

  const { isLoading, data: feedbacks } = useQuery({
    queryKey: ['feedbacks', filterBy, sortBy],
    queryFn: () => getFeedbacks({ filterBy }),
  });

  return { isLoading, feedbacks };
}
