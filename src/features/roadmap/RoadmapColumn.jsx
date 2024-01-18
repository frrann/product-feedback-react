import SuggestionRow from '../suggestions/SuggestionRow';

import { STATUS_ROADMAP } from '../../constants';

function RoadmapColumn({ suggestions, status }) {
  return (
    <div className="flex flex-1 cursor-pointer flex-col justify-start pt-8 md:cursor-default lg:pt-12">
      <h4 className="text-blue-midnight lg:text-lg">
        {STATUS_ROADMAP[status].heading} (
        {suggestions.find((item) => item.status === status).count_of_status})
      </h4>
      <p className="custom-body-3 lg:custom-body-1 font-normal text-neutral-grey">
        {STATUS_ROADMAP[status].description}
      </p>
      <div className="pt-6 lg:pt-8">
        {suggestions
          .find((item) => item.status === status)
          ?.data.map((item) => (
            <SuggestionRow
              item={item}
              status={status}
              shownOnRoadmap={true}
              key={item.id}
            />
          ))}
      </div>
    </div>
  );
}

export default RoadmapColumn;
