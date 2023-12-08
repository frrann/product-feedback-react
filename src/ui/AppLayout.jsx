import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className="page-container">
      <Outlet />
    </div>
  );
}

export default AppLayout;
