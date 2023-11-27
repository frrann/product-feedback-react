import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdDone,
} from 'react-icons/md';

function Trigger({ label, icon = null, onClick }) {
  const styles =
    'flex h-16 cursor-pointer items-center justify-center gap-1 rounded-lg bg-blue-midnight text-sm text-neutral-pinky transition-all duration-300';

  return (
    <div className={styles} onClick={onClick} tabIndex={0}>
      <span>{label}</span>
      {icon && <span>{icon}</span>}
    </div>
  );
}

function DropdownMenu({
  items,
  selected,
  onItemClick,
  onClose,
  searchParams,
  setSearchParams,
}) {
  const triggerStyles =
    'bg-neutral-white mt-4 w-64 rounded-lg shadow-xl transition-all duration-300 absolute';

  const itemStyles =
    'flex cursor-pointer items-center justify-between px-5 py-3 text-base';

  function handleClick(item) {
    searchParams.set('sortBy', item.value);
    setSearchParams(searchParams);
    onItemClick(item);
    onClose();
  }

  return (
    <div className={triggerStyles} role="listbox">
      {items.map((item, index) => (
        <div
          key={item.id}
          onClick={() => handleClick(item)}
          className={`${itemStyles} ${
            selected?.id === item.id ? 'text-purple' : 'text-neutral-slate'
          } ${
            index !== items.length - 1 &&
            'border-b-[2px] border-b-neutral-silver'
          }`}
        >
          <span>{item.text}</span>
          {selected?.id === item.id && (
            <span>
              <MdDone />
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function Dropdown({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const crtSearchParam = searchParams.get('sortBy');
  const textDefault =
    items[items.findIndex((item) => item.value === crtSearchParam)]?.text;

  const icon = isOpen ? (
    <MdOutlineKeyboardArrowUp />
  ) : (
    <MdOutlineKeyboardArrowDown />
  );

  return (
    <div>
      <Trigger
        label={`Sort by : ${selected?.text || textDefault || items[0].text}`}
        icon={icon}
        onClick={() => setIsOpen((open) => !open)}
      />
      {isOpen && (
        <DropdownMenu
          items={items}
          selected={selected}
          onItemClick={setSelected}
          onClose={() => setIsOpen(false)}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      )}
    </div>
  );
}

export default Dropdown;
