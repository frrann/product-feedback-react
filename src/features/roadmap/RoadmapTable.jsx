import RoadmapHeader from './RoadmapHeader';
import SpinnerLarge from '../../ui/SpinnerLarge';
import RoadmapColumn from './RoadmapColumn';

import { useGroupedSuggestions } from '../suggestions/useGroupedSuggestions';

function RoadmapTable() {
  const { groupedSuggestions, isLoading } = useGroupedSuggestions();

  if (isLoading) return <SpinnerLarge />;

  return (
    <div className="flex flex-col md:mx-auto md:h-fit md:w-[689px] md:py-14 lg:w-[1110px]">
      <RoadmapHeader />
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
