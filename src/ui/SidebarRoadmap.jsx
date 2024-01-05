import { useNavigate } from 'react-router-dom';
import Button from './Button';

import { GoDotFill } from 'react-icons/go';

function SidebarRoadmap() {
  const navigate = useNavigate();

  return (
    <div className="hidden bg-neutral-white md:grid md:flex-1 md:rounded-lg lg:flex-none">
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
          <span className="font-bold">2</span>
        </div>
        <div className="flex justify-between pb-2 text-neutral-grey">
          <div className="flex items-center gap-4">
            <GoDotFill color="#AD1FEA" />
            <span>In-Progress</span>
          </div>
          <span className="font-bold">3</span>
        </div>
        <div className="flex justify-between text-neutral-grey">
          <div className="flex items-center gap-4">
            <GoDotFill color="#62BCFA" />
            <span>Live</span>
          </div>
          <span className="font-bold">1</span>
        </div>
      </div>
    </div>
  );
}

export default SidebarRoadmap;
