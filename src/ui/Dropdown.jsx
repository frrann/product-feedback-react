import { useState } from 'react';

import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdDone,
} from 'react-icons/md';

function Trigger({ defaultLabel, label, name, icon = null, onClick }) {
  const styles = {
    sort: 'cursor-pointer flex h-16 cursor-pointer items-center justify-center gap-1 rounded-lg bg-blue-midnight text-sm text-neutral-pinky transition-all duration-300',
    categories:
      'cursor-pointer flex justify-between items-center text-sm my-2 w-full rounded border-0 bg-neutral-silver px-5 py-3 text-blue-dark transition duration-300 focus:outline-none focus:ring-1 focus:ring-blue',
  };

  return (
    <div className={styles[name]} onClick={onClick} tabIndex={0}>
      {defaultLabel.length !== 0 && <span>{defaultLabel}</span>}
      <span className={name === 'sort' ? 'font-bold' : null}>{label}</span>
      {icon && <span>{icon}</span>}
    </div>
  );
}

function DropdownMenu({ items, name, selected, onItemClick, onClose }) {
  const triggerStyles = {
    sort: 'bg-neutral-white mt-4 w-64 rounded-lg shadow-xl transition-all duration-300 absolute z-50',
    categories:
      'bg-neutral-white mt-4 md:w-[492px] w-full rounded-lg shadow-xl transition-all duration-300 absolute top-9 z-50',
  };

  const itemStyles =
    'flex cursor-pointer items-center justify-between px-5 py-3 text-base';

  function handleClick(item) {
    onItemClick(item);
    onClose();
  }

  return (
    <div className={triggerStyles[name]} role="listbox">
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

function Dropdown({
  name,
  title = '',
  items,
  onChange,
  crtSearchParam = null,
  defaultValue = null,
  ...rest
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);

  const textDefault =
    items[items.findIndex((item) => item.value === crtSearchParam)]?.text;

  const icon = isOpen ? (
    <MdOutlineKeyboardArrowUp />
  ) : (
    <MdOutlineKeyboardArrowDown />
  );

  return (
    <div {...rest} className="relative">
      <Trigger
        defaultLabel={title}
        label={`${selected?.text || textDefault || items[0].text}`}
        icon={icon}
        onClick={() => setIsOpen((open) => !open)}
        name={name}
      />
      {isOpen && (
        <DropdownMenu
          name={name}
          items={items}
          selected={selected}
          onItemClick={(item) => {
            setSelected(item);
            onChange(item);
          }}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

export default Dropdown;
