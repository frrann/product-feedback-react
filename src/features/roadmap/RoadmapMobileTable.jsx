import { useState } from 'react';
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
  },
  progress: {
    heading: 'In-Progress',
    description: 'Currently being developed',
  },
  live: {
    heading: 'Live',
    description: 'Released features',
  },
};

const STATUS_OPTIONS = ['planned', 'progress', 'live', 'suggestion'];

function RoadmapMobileTable() {
  const moveBack = useMoveBack();
  const navigate = useNavigate();

  const [status, setStatus] = useState({
    planned: true,
    progress: false,
    live: false,
  });

  const selectedStatus = Object.keys(status).find(
    (key) => status[key] === true,
  );

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
      <div className="flex items-center justify-between bg-blue-midnight p-6 md:p-8 ">
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
          <h3 className="text-neutral-white">Roadmap</h3>
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
        <div className="flex items-center justify-between">
          <div
            className={`flex flex-1 cursor-pointer justify-center py-5 ${
              status.planned ? 'border-b-4 border-b-orange' : 'opacity-40'
            }`}
            onClick={() =>
              setStatus({ planned: true, progress: false, live: false })
            }
          >
            <h4 className="text-blue-midnight">
              Planned ({groupedSuggestions['planned'].length})
            </h4>
          </div>
          <div
            className={`flex flex-1 cursor-pointer justify-center py-5 ${
              status.progress ? 'border-b-4 border-b-purple' : 'opacity-40'
            }`}
            onClick={() =>
              setStatus({ planned: false, progress: true, live: false })
            }
          >
            <h4 className="text-blue-midnight">
              In-Progress ({groupedSuggestions['progress'].length})
            </h4>
          </div>
          <div
            className={`flex flex-1 cursor-pointer justify-center py-5 ${
              status.live ? 'border-b-4 border-b-blue-light' : 'opacity-40'
            }`}
            onClick={() =>
              setStatus({ planned: false, progress: false, live: true })
            }
          >
            <h4 className="text-blue-midnight">
              Live ({groupedSuggestions['live'].length})
            </h4>
          </div>
        </div>
        <div className="px-6">
          <h3 className="text-blue-midnight">
            {ROADMAP_TEXT[selectedStatus].heading} (
            {groupedSuggestions[selectedStatus].length})
          </h3>
          <p className="custom-body-3 font-normal text-neutral-grey">
            {ROADMAP_TEXT[selectedStatus].description}
          </p>
        </div>
        <div className="px-6">
          {groupedSuggestions[selectedStatus].map((item) => (
            <SuggestionRow
              item={item}
              key={item.id}
              shownOnRoadmap={true}
              status={selectedStatus}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoadmapMobileTable;
