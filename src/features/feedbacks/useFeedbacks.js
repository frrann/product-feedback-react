import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

import { getFeedbacks } from '../../services/apiFeedbacks';

export function useFeedbacks() {
  const [searchParams] = useSearchParams();

  // FILTER
  const filterBy = searchParams.get('filterBy') || 'all';

  // SORT
  const sortBy = searchParams.get('sortBy') || 'most-upvotes';

  const {
    isLoading,
    data: feedbacks,
    error,
  } = useQuery({
    queryKey: ['feedbacks', filterBy, sortBy],
    queryFn: () => getFeedbacks({ filterBy }),
  });

  return { isLoading, feedbacks, error };
}
