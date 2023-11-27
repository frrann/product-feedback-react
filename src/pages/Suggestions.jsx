import SortBar from '../features/feedbacks/SortBar';
import SuggestionsList from '../features/feedbacks/SuggestionsList';

function Suggestions() {
  return (
    <main className="lg:flex-1 lg:pr-[165px] lg:pt-24">
      <SortBar />

      <div className="flex flex-col overflow-hidden px-6 pb-12 pt-8 md:px-10 md:pt-3 lg:w-full lg:pl-0 lg:pr-0">
        {/* <div className="grid h-max gap-4 overflow-hidden"> */}
        <SuggestionsList />
        {/* </div> */}
      </div>
    </main>
  );
}

export default Suggestions;
