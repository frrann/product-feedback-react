import { useNavigate } from 'react-router-dom';

import IconSuggestions from '../../assets/icon-suggestions.svg';

import Button from '../../ui/Button';
import Dropdown from '../../ui/Dropdown';
import SpinnerMini from '../../ui/SpinnerMini';

import { useSuggestions } from './useSuggestions';

function SortBar() {
  const { isLoading, suggestions } = useSuggestions();
  const navigate = useNavigate();

  return (
    <div className="bg-neutral-silver md:px-10 md:pb-3 lg:w-full lg:pl-0 lg:pr-0">
      <div className="flex items-center justify-between bg-blue-midnight py-1 pl-6 pr-4 text-neutral-light md:rounded-lg">
        <div className="flex items-center gap-4">
          <img
            src={IconSuggestions}
            alt="Suggestions section"
            className="hidden md:block"
          />
          <div className="hidden items-center gap-2 pr-5 md:flex">
            {!isLoading ? <h3>{suggestions?.length}</h3> : <SpinnerMini />}
            <h3>Suggestions</h3>
          </div>
          <Dropdown
            items={[
              { id: 1, value: 'most-upvotes', text: 'Most Upvotes' },
              { id: 2, value: 'least-upvotes', text: 'Least Upvotes' },
              { id: 3, value: 'most-comments', text: 'Most Comments' },
              { id: 4, value: 'least-comments', text: 'Least Comments' },
            ]}
          />
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
    </div>
  );
}

export default SortBar;
