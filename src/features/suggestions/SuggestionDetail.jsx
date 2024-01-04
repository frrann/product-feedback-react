import Button from '../../ui/Button';
import SpinnerLarge from '../../ui/SpinnerLarge';
import SuggestionCard from './SuggestionCard';
import CommentsCard from './CommentsCard';
import AddCommentCard from './AddCommentCard';

import ArrowBack from '../../assets/icon-arrow-back-blue.svg';

import { useMoveBack } from '../../hooks/useMoveBack';
import { useSuggestion } from './useSuggestion';

function SuggestionDetail() {
  const moveBack = useMoveBack();
  const { suggestion, isLoading: isSuggestionLoading } = useSuggestion();

  if (isSuggestionLoading) return <SpinnerLarge />;

  return (
    <div className="flex flex-col gap-6 p-6 md:p-8 lg:mx-auto lg:h-fit lg:w-[730px] lg:py-20">
      <div className="flex items-center justify-between">
        <Button
          variant="secondary"
          color="transparent"
          size="auto"
          onClick={moveBack}
        >
          <img src={ArrowBack} alt="Arrow back" />
          Go Back
        </Button>
        <Button color="blue">Edit Feedback</Button>
      </div>
      <SuggestionCard suggestion={suggestion} />
      <CommentsCard suggestion={suggestion} />
      <AddCommentCard />
    </div>
  );
}

export default SuggestionDetail;
