import { useNavigate } from 'react-router-dom';

import Button from '../../ui/Button';

import IllustrationEmpty from '../../assets/illustration-empty.svg';

function NoSuggestions() {
  const navigate = useNavigate();

  return (
    <div className="grid justify-center justify-items-center gap-12 p-10">
      <img src={IllustrationEmpty} alt="No suggestions yet" />
      <div className="text-center">
        <h1 className="text-blue-midnight">There is no feedback yet.</h1>
        <p className="custom-body-1 text-neutral-grey">
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
