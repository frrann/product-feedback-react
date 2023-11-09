import { useState } from 'react';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdDone,
} from 'react-icons/md';

function Trigger({ label, icon = null, onClick }) {
  const styles =
    'flex h-16 w-48 cursor-pointer items-center justify-center gap-1 rounded-lg bg-blue-midnight text-sm text-neutral-pinky transition-all duration-300';

  return (
    <div className={styles} onClick={onClick} tabIndex={0}>
      <span>{label}</span>
      {icon && <span>{icon}</span>}
    </div>
  );
}

function DropdownMenu({ items, selected, onItemClick, onClose }) {
  const triggerStyles =
    'bg-white mt-4 w-64 rounded-lg shadow-xl transition-all duration-300';

  const itemStyles =
    'flex cursor-pointer items-center justify-between px-5 py-3 text-base';

  return (
    <div className={triggerStyles} role="listbox">
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => {
            onItemClick(item);
            onClose();
          }}
          className={`${itemStyles} ${
            selected?.id === item.id ? 'text-purple' : 'text-neutral-slate'
          } ${
            item.id !== items.length - 1 &&
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

  const icon = isOpen ? (
    <MdOutlineKeyboardArrowUp />
  ) : (
    <MdOutlineKeyboardArrowDown />
  );

  return (
    <div>
      <Trigger
        label={`Sort by : ${selected?.text || items[0].text}`}
        icon={icon}
        onClick={() => setIsOpen((open) => !open)}
      />
      {isOpen && (
        <DropdownMenu
          items={items}
          selected={selected}
          onItemClick={setSelected}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

export default Dropdown;
