import Button from '../ui/Button';

import IllustrationEmpty from '../assets/illustration-empty.svg';
import ArrowBack from '../assets/icon-arrow-back.svg';
import { useMoveBack } from '../hooks/useMoveBack';

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <div className="mx-auto my-auto self-center rounded-lg bg-neutral-silver px-10 py-16 md:py-20">
      <div className="grid justify-center justify-items-center gap-12 bg-neutral-white p-10">
        <img src={IllustrationEmpty} alt="Page not found" />
        <h1 className="text-neutral-grey">
          The page you are looking for could not be found.
        </h1>
        <Button variant="secondary" color="dark-blue" onClick={moveBack}>
          <img src={ArrowBack} alt="Arrow back" />
          Go back
        </Button>
      </div>
    </div>
  );
}

export default PageNotFound;
