import { useNavigate } from 'react-router-dom';

import Button from '../../ui/Button';
import SpinnerLarge from '../../ui/SpinnerLarge';
import ArrowBack from '../../assets/icon-arrow-back.svg';
import RoadmapColumn from './RoadmapColumn';

import { useMoveBack } from '../../hooks/useMoveBack';
import { useGroupedSuggestions } from '../suggestions/useGroupedSuggestions';

function RoadmapTable() {
  const moveBack = useMoveBack();
  const navigate = useNavigate();

  const { groupedSuggestions, isLoading } = useGroupedSuggestions();

  if (isLoading) return <SpinnerLarge />;

  return (
    <div className="flex flex-col md:mx-auto md:h-fit md:w-[689px] md:py-14 lg:w-[1110px]">
      <div className="flex items-center justify-between rounded-[10px] bg-blue-midnight p-6 md:p-8">
        <div className="">
          <Button
            variant="secondary"
            color="transparent"
            size="auto"
            onClick={moveBack}
          >
            <img src={ArrowBack} alt="Arrow back" />
            <span className="text-neutral-white">Go Back</span>
          </Button>
          <h1 className="text-neutral-white">Roadmap</h1>
        </div>
        <Button
          variant="primary"
          color="purple"
          margin="my-0"
          onClick={() => navigate('/suggestions/new')}
        >
          + Add Feedback
        </Button>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between gap-[10px] lg:gap-8">
          <RoadmapColumn suggestions={groupedSuggestions} status="planned" />
          <RoadmapColumn suggestions={groupedSuggestions} status="progress" />
          <RoadmapColumn suggestions={groupedSuggestions} status="live" />
        </div>
      </div>
    </div>
  );
}

export default RoadmapTable;
