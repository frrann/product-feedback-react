import { useSearchParams } from 'react-router-dom';

import Tag from './Tag';

const categories = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

function SidebarCategories() {
  const [searchParams, setSearchParams] = useSearchParams();
  const crtFilter = searchParams.get('filterBy') || 'all';

  function handleClick(category) {
    if (crtFilter === category.toLowerCase()) return;

    searchParams.set('filterBy', category.toLowerCase());
    setSearchParams(searchParams);
  }

  return (
    <div className="bg-neutral-white md:flex md:flex-1 md:flex-col md:rounded-lg lg:flex-none">
      <div className="flex flex-wrap px-6 pb-[10px] pt-6">
        {categories.map((category) => (
          <Tag
            onClick={() => handleClick(category)}
            active={crtFilter === category.toLowerCase()}
            key={category}
          >
            {category}
          </Tag>
        ))}
      </div>
    </div>
  );
}

export default SidebarCategories;
