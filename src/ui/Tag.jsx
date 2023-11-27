function Tag({ children, onClick, active }) {
  const activeStyles = '!upvote-active text-neutral-white !bg-blue';

  return (
    <div
      className={`${
        active ? activeStyles : ''
      } mb-[14px] mr-2 w-fit cursor-pointer rounded-lg  bg-neutral-pinky px-4 py-[6px] text-blue transition-all duration-300 hover:bg-blue-periwinkle`}
      onClick={onClick}
    >
      <div className="select-none text-center text-xs font-bold capitalize">
        {children}
      </div>
    </div>
  );
}

export default Tag;
