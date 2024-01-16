import { useState } from 'react';

import RoadmapHeader from './RoadmapHeader';
import SuggestionRow from '../suggestions/SuggestionRow';
import SpinnerLarge from '../../ui/SpinnerLarge';

import { useGroupedSuggestions } from '../suggestions/useGroupedSuggestions';
import { ROADMAP_TEXT } from '../../constants';

function RoadmapMobileTable() {
  const [status, setStatus] = useState({
    planned: true,
    progress: false,
    live: false,
  });

  const selectedStatus = Object.keys(status).find(
    (key) => status[key] === true,
  );

  const { groupedSuggestions, isLoading } = useGroupedSuggestions();

  if (isLoading) return <SpinnerLarge />;

  return (
    <div className="flex flex-col lg:mx-auto lg:h-fit lg:w-[730px] lg:py-20">
      <RoadmapHeader />
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
              Planned (
              {
                groupedSuggestions.find((item) => item.status === 'planned')
                  .count_of_status
              }
              )
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
              In-Progress (
              {
                groupedSuggestions.find((item) => item.status === 'progress')
                  .count_of_status
              }
              )
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
              Live (
              {
                groupedSuggestions.find((item) => item.status === 'live')
                  .count_of_status
              }
              )
            </h4>
          </div>
        </div>
        <div className="px-6">
          <h3 className="text-blue-midnight">
            {ROADMAP_TEXT[selectedStatus].heading} (
            {
              groupedSuggestions.find((item) => item.status === selectedStatus)
                .count_of_status
            }
            )
          </h3>
          <p className="custom-body-3 font-normal text-neutral-grey">
            {ROADMAP_TEXT[selectedStatus].description}
          </p>
        </div>
        <div className="px-6">
          {groupedSuggestions
            .find((item) => item.status === selectedStatus)
            ?.data.map((item) => (
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

// ### Displaying Grouped Data on UI
// const groupedSuggestions = suggestions?.reduce(
//   (acc, suggestion) => {
//     const { status } = suggestion;

//     if (!acc[status]) {
//       acc[status] = [];
//     }

//     acc[status].push(suggestion);

//     return acc;
//   },
//   Object.fromEntries(STATUS_OPTIONS.map((status) => [status, []])),
// );
