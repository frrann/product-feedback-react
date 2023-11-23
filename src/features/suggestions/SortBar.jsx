import IconSuggestions from '../../assets/icon-suggestions.svg';
import Button from '../../ui/Button';
import Dropdown from '../../ui/Dropdown';

function SortBar() {
  const suggestionsLength = 6;

  return (
    <div className="bg-neutral-silver md:px-10 md:pb-3 lg:w-full lg:pl-0 lg:pr-0">
      <div className="flex items-center justify-between bg-blue-midnight py-1 pl-6 pr-4 text-neutral-light md:rounded-lg">
        {/* <!-- Add number of suggestions here -->  */}
        <div className="flex items-center gap-4">
          <img
            src={IconSuggestions}
            alt="Suggestions section"
            className="hidden md:block"
          />
          <h3 className="hidden pr-5 md:block">
            {suggestionsLength} Suggestions
          </h3>
          <Dropdown
            items={[
              { id: 1, text: 'Most Upvotes' },
              { id: 2, text: 'Least Upvotes' },
              { id: 3, text: 'Most Comments' },
              { id: 4, text: 'Least Comments' },
            ]}
          />
        </div>

        <Button variant="primary" color="purple" margin="my-0">
          + Add Feedback
        </Button>
      </div>
    </div>
  );
}

export default SortBar;
