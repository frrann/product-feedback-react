import { useNavigate } from 'react-router-dom';

import Button from '../../ui/Button';
import SuggestionRow from '../suggestions/SuggestionRow';
import SpinnerLarge from '../../ui/SpinnerLarge';
import ArrowBack from '../../assets/icon-arrow-back.svg';

import { useMoveBack } from '../../hooks/useMoveBack';
import { useSuggestions } from '../suggestions/useSuggestions';

const ROADMAP_TEXT = {
  planned: {
    heading: 'Planned',
    description: 'Ideas prioritized for research',
    color: '#F49F85',
  },
  progress: {
    heading: 'In-Progress',
    description: 'Currently being developed',
    color: '#AD1FEA',
  },
  live: {
    heading: 'Live',
    description: 'Released features',
    color: '#62BCFA',
  },
};

const STATUS_OPTIONS = ['planned', 'progress', 'live', 'suggestion'];

function RoadmapTable() {
  const moveBack = useMoveBack();
  const navigate = useNavigate();

  const { isLoading, suggestions } = useSuggestions();
  const groupedSuggestions = suggestions?.reduce(
    (acc, suggestion) => {
      const { status } = suggestion;

      if (!acc[status]) {
        acc[status] = [];
      }

      acc[status].push(suggestion);

      return acc;
    },
    Object.fromEntries(STATUS_OPTIONS.map((status) => [status, []])),
  );

  if (isLoading) return <SpinnerLarge />;

  return (
    <div className="flex flex-col lg:mx-auto lg:h-fit lg:w-[730px] lg:py-20">
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
          <h1 className="text-neutral-white">Roadmap TABLE</h1>
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
        <div className="flex justify-between gap-[10px]">
          <div className="flex flex-1 cursor-pointer flex-col justify-start pt-8">
            <h4>Planned ({groupedSuggestions['planned'].length})</h4>
            <p className="custom-body-3 font-normal text-neutral-grey">
              {ROADMAP_TEXT['planned'].description}
            </p>
            <div className="pt-6">
              {groupedSuggestions['planned'].map((item) => (
                <SuggestionRow
                  item={item}
                  key={item.id}
                  shownOnRoadmap={true}
                  status="planned"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-1 cursor-pointer flex-col justify-start pt-8">
            <h4>In-Progress ({groupedSuggestions['progress'].length})</h4>
            <p className="custom-body-3 font-normal text-neutral-grey">
              {ROADMAP_TEXT['progress'].description}
            </p>
            <div className="pt-6">
              {groupedSuggestions['progress'].map((item) => (
                <SuggestionRow
                  item={item}
                  key={item.id}
                  shownOnRoadmap={true}
                  status="progress"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-1 cursor-pointer flex-col justify-start pt-8">
            <h4>Live ({groupedSuggestions['live'].length})</h4>
            <p className="custom-body-3 font-normal text-neutral-grey">
              {ROADMAP_TEXT['live'].description}
            </p>
            <div className="pt-6">
              {groupedSuggestions['live'].map((item) => (
                <SuggestionRow
                  item={item}
                  key={item.id}
                  shownOnRoadmap={true}
                  status="live"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadmapTable;
