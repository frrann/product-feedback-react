import Tag from './Tag';

function SidebarCategories() {
  return (
    <div className="hidden bg-neutral-white md:flex md:flex-1 md:flex-col md:rounded-lg lg:flex-none">
      <div className="flex flex-wrap px-6 pb-[10px] pt-6">
        <Tag>All</Tag>
        <Tag>UI</Tag>
        <Tag>UX</Tag>
        <Tag>Enhancement</Tag>
        <Tag>Bug</Tag>
        <Tag>Feature</Tag>
      </div>
    </div>
  );
}

export default SidebarCategories;
