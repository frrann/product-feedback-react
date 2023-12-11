import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import SuggestionRow from './SuggestionRow';
import NoSuggestions from './NoSuggestions';
import Spinner from '../../ui/Spinner';

import { useFeedbacks } from './useFeedbacks';

function SuggestionsList() {
  const { isLoading, feedbacks: suggestions } = useFeedbacks();

  const [searchParams] = useSearchParams();
  const [sortedSuggestions, setSortedSuggestions] = useState(suggestions || []);

  useEffect(() => {
    const currentSortBy = searchParams.get('sortBy') || 'most-upvotes';

    if (currentSortBy === 'most-upvotes')
      setSortedSuggestions(suggestions?.sort((a, b) => b.upvotes - a.upvotes));
    if (currentSortBy === 'least-upvotes')
      setSortedSuggestions(suggestions?.sort((a, b) => a.upvotes - b.upvotes));
    if (currentSortBy === 'most-comments')
      setSortedSuggestions(
        suggestions?.sort((a, b) => b.comments.length - a.comments.length),
      );
    if (currentSortBy === 'least-comments')
      setSortedSuggestions(
        suggestions?.sort((a, b) => a.comments.length - b.comments.length),
      );
  }, [searchParams, suggestions]);

  if (isLoading) return <Spinner />;

  return (
    <>
      {!sortedSuggestions?.length && <NoSuggestions />}
      {sortedSuggestions?.length !== 0 && (
        <div className="grid h-max gap-4 overflow-hidden">
          {sortedSuggestions?.map((item) => (
            <SuggestionRow item={item} key={item.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default SuggestionsList;
