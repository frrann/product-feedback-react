import Button from '../ui/Button';

import IllustrationEmpty from '../assets/illustration-empty.svg';
import ArrowBack from '../assets/icon-arrow-back.svg';

function PageNotFound() {
  return (
    <div className="grid justify-center justify-items-center gap-12 p-10">
      <img src={IllustrationEmpty} alt="Page not found" />
      <h1 className="text-neutral-grey">
        The page you are looking for could not be found.
      </h1>
      <Button variant="secondary" color="dark-blue">
        <img src={ArrowBack} alt="Arrow back" />
        Go back
      </Button>
    </div>
  );
}

export default PageNotFound;
