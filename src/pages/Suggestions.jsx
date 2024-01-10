import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import Sidebar from '../ui/Sidebar';
import SortBar from '../features/suggestions/SortBar';
import SuggestionsList from '../features/suggestions/SuggestionsList';

function Suggestions() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Sidebar
        isMobile={isMobile}
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
      />
      <main
        className={`bg-neutral-silver lg:mr-auto lg:max-w-[825px] lg:flex-1 lg:pt-24 ${
          isMobile && isMenuOpen && 'opacity-40'
        }`}
      >
        <SortBar />

        <div className="flex flex-col overflow-hidden px-6 pb-12 pt-8 md:px-10 md:pt-3 lg:w-full lg:pl-0 lg:pr-0">
          <SuggestionsList />
        </div>
      </main>
    </>
  );
}

export default Suggestions;
