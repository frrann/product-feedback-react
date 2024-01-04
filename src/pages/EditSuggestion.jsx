import SpinnerLarge from '../ui/SpinnerLarge';
import SuggestionForm from '../features/suggestions/SuggestionForm';
import { useSuggestion } from '../features/suggestions/useSuggestion';

function EditSuggestion() {
  const { suggestion, isLoading: isSuggestionLoading } = useSuggestion();

  if (isSuggestionLoading) return <SpinnerLarge />;

  return <SuggestionForm suggestionToEdit={suggestion} />;
}

export default EditSuggestion;
