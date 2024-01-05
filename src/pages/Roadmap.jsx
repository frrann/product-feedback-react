import { useMediaQuery } from 'react-responsive';

import RoadmapMobileTable from '../features/roadmap/RoadmapMobileTable';
import RoadmapTable from '../features/roadmap/RoadmapTable';

function Roadmap() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return <>{isMobile ? <RoadmapMobileTable /> : <RoadmapTable />}</>;
}

export default Roadmap;
