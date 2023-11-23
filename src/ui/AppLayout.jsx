import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import MainContent from './MainContent';

function AppLayout() {
  return (
    <div className="page-container">
      <Sidebar />

      <MainContent>
        <Outlet />
      </MainContent>
    </div>
  );
}

export default AppLayout;
