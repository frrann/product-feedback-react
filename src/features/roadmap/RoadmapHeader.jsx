import { useNavigate } from 'react-router-dom';

import Button from '../../ui/Button';
import ArrowBack from '../../assets/icon-arrow-back.svg';

import { useMoveBack } from '../../hooks/useMoveBack';

function RoadmapHeader() {
  const moveBack = useMoveBack();
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between bg-blue-midnight p-6 md:rounded-[10px] md:p-8">
      <div>
        <Button
          variant="secondary"
          color="transparent"
          size="auto"
          onClick={moveBack}
        >
          <img src={ArrowBack} alt="Arrow back" />
          <span className="text-neutral-white">Go Back</span>
        </Button>
        <h3 className="text-neutral-white md:text-2xl">Roadmap</h3>
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
  );
}

export default RoadmapHeader;
