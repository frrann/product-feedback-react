import { useNavigate } from 'react-router-dom';

import Button from './Button';
import Spinner from './Spinner';

import { GoDotFill } from 'react-icons/go';

import { useGroupedSuggestions } from '../features/suggestions/useGroupedSuggestions';

function SidebarRoadmap() {
  const navigate = useNavigate();
  const { groupedSuggestions, isLoading } = useGroupedSuggestions();

  if (isLoading) return <Spinner />;

  return (
    <div className="bg-neutral-white md:grid md:flex-1 md:rounded-lg lg:flex-none">
      <div className="p-6">
        <div className="flex justify-between pb-6">
          <h3 className="text-blue-midnight">Roadmap</h3>
          <Button
            variant="secondary"
            color="transparent"
            size="auto"
            margin="my-0"
            onClick={() => navigate('/roadmap')}
          >
            View
          </Button>
        </div>
        <div className="flex justify-between pb-2 text-neutral-grey">
          <div className="flex items-center gap-4">
            <GoDotFill color="#F49F85" />
            <span>Planned</span>
          </div>
          <span className="font-bold">
            {groupedSuggestions.find((item) => item.status === 'planned')
              ?.count_of_status || 0}
          </span>
        </div>
        <div className="flex justify-between pb-2 text-neutral-grey">
          <div className="flex items-center gap-4">
            <GoDotFill color="#AD1FEA" />
            <span>In-Progress</span>
          </div>
          <span className="font-bold">
            {groupedSuggestions.find((item) => item.status === 'progress')
              ?.count_of_status || 0}
          </span>
        </div>
        <div className="flex justify-between text-neutral-grey">
          <div className="flex items-center gap-4">
            <GoDotFill color="#62BCFA" />
            <span>Live</span>
          </div>
          <span className="font-bold">
            {groupedSuggestions.find((item) => item.status === 'live')
              ?.count_of_status || 0}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SidebarRoadmap;
