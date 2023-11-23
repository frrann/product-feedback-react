import Logo from './Logo';
import SidebarCategories from './SidebarCategories';
import SidebarRoadmap from './SidebarRoadmap';

function Sidebar() {
  return (
    <aside className="bg-neutral-silver md:flex md:justify-between md:gap-[10px] md:px-10 md:pb-10 md:pt-14 lg:flex lg:w-1/3 lg:max-w-[450px] lg:flex-col lg:justify-normal lg:gap-6 lg:pl-[165px] lg:pr-[30px] lg:pt-24">
      <Logo />
      <SidebarCategories />
      <SidebarRoadmap />
    </aside>
  );
}

export default Sidebar;
