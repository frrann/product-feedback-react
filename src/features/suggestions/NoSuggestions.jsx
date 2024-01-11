import { useNavigate } from 'react-router-dom';

import Button from '../../ui/Button';

import IllustrationEmpty from '../../assets/illustration-empty.svg';

function NoSuggestions() {
  const navigate = useNavigate();

  return (
    <div className="grid justify-center justify-items-center gap-6 rounded-lg bg-neutral-white p-10 md:gap-12 md:py-28">
      <img src={IllustrationEmpty} alt="No suggestions yet" />
      <div className="mt-4 text-center md:px-24 lg:px-40">
        <h3 className="text-blue-midnight md:text-2xl">
          There is no feedback yet.
        </h3>
        <p className="custom-body-3 md:custom-body-1 mt-[14px] font-normal text-neutral-grey">
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
      </div>
      <Button
        variant="primary"
        color="purple"
        onClick={() => navigate('/suggestions/new')}
      >
        + Add Feedback
      </Button>
    </div>
  );
}

export default NoSuggestions;
