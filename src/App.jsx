import AppLayout from './ui/AppLayout';

function App() {
  return (
    <AppLayout>
      <div className="mt-10 rounded-lg bg-neutral-white md:mt-16 xl:mt-0">
        <div className="px-6 py-11 md:px-[42px] md:pt-[52px]">
          <p className="text-lg font-bold text-blue-dark md:text-2xl">
            AppLayout
          </p>
        </div>
      </div>
    </AppLayout>
  );
}

export default App;
