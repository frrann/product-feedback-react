import Logo from './Logo';
import SidebarCategories from './SidebarCategories';
import SidebarRoadmap from './SidebarRoadmap';

function Sidebar() {
  return (
    // <aside className="bg-neutral-silver md:flex md:justify-between md:gap-[10px] md:px-10 md:pb-10 md:pt-14 lg:flex lg:w-1/3 lg:max-w-[450px] lg:flex-col lg:justify-normal lg:gap-6 lg:pl-[165px] lg:pr-[30px] lg:pt-24">
    <aside className="bg-neutral-silver md:flex md:justify-between md:gap-[10px] md:px-10 md:pb-10 md:pt-14 lg:ml-auto lg:flex lg:max-w-[285px] lg:flex-col lg:justify-normal lg:gap-6 lg:pl-0 lg:pr-[30px] lg:pt-24">
      <Logo />
      <SidebarCategories />
      <SidebarRoadmap />
      {/*  
      <div className="h-max overflow-hidden rounded-lg bg-neutral-white md:mt-16 xl:mt-0">
          <h1>Suggestions</h1>
          <button onClick={logout}>Logout</button> 
      </div> 
      */}
    </aside>
  );
}

export default Sidebar;
