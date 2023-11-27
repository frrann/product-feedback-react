import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import MainContent from './MainContent';

function AppLayout() {
  return (
    <div className="page-container">
      <Sidebar />

      {/* <MainContent> */}
      <Outlet />
      {/* </MainContent> */}
    </div>
  );
}

export default AppLayout;

// <div className="h-max overflow-hidden rounded-lg bg-neutral-white md:mt-16 xl:mt-0">
//   <h1>Suggestions</h1>

//   {/* <button onClick={logout}>Logout</button> */}
// </div>
