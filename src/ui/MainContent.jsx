import SortBar from '../features/suggestions/SortBar';

function MainContent({ children }) {
  return (
    <main className="lg:flex-1 lg:pr-[165px] lg:pt-24">
      <SortBar />

      <div className="grid px-6 pb-12 pt-8 md:px-10 md:pt-3 lg:w-full lg:pl-0 lg:pr-0">
        {children}
      </div>
    </main>
  );
}

export default MainContent;
