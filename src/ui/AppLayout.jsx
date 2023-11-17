import { Outlet } from 'react-router-dom';

import Header from './Header';
import SortBar from '../features/suggestions/SortBar';

function AppLayout() {
  return (
    <div className="flex w-full flex-col bg-neutral-silver lg:h-screen lg:flex-row lg:overflow-auto">
      {/* header */}
      <Header />

      {/* sort & add feedback */}
      <div className="lg:max-w-1/3 lg:w-2/3 lg:pr-[165px] lg:pt-24">
        <SortBar />

        {/* main */}
        {/* <div className="md:pb-[54px] xl:px-[450px] xl:pb-[147px] xl:pt-[180px]"> */}
        <div className="grid px-6 pb-12 pt-8 md:px-10 md:pt-3 lg:w-full lg:pl-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
