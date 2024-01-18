import Logo from './Logo';
import SidebarCategories from './SidebarCategories';
import SidebarRoadmap from './SidebarRoadmap';
import SidebarUser from './SidebarUser';

function Sidebar({ isMobile, isOpen, setIsOpen }) {
  return (
    <aside className="bg-neutral-silver md:flex md:justify-between md:gap-[10px] md:px-10 md:pb-10 md:pt-14 lg:ml-auto lg:flex lg:max-w-[285px] lg:flex-col lg:justify-normal lg:gap-6 lg:pl-0 lg:pr-[30px] lg:pt-24">
      <Logo isOpen={isOpen} setIsOpen={setIsOpen} />
      {!isMobile && (
        <>
          <SidebarCategories />
          <SidebarRoadmap />
          <SidebarUser />
        </>
      )}
      {isOpen && (
        <div className="absolute right-0 z-10 h-screen max-w-[270px] bg-neutral-white">
          <SidebarCategories />
          <SidebarRoadmap />
          <SidebarUser />
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
