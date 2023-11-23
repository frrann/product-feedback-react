function Tag({ children }) {
  return (
    <div className="active:!upvote-active mb-[14px] mr-2 w-fit cursor-pointer rounded-lg bg-neutral-pinky px-4 py-[6px] text-blue transition-all duration-300 hover:bg-blue-periwinkle active:bg-blue active:text-neutral-white ">
      <div className="select-none text-center text-xs font-bold capitalize">
        {children}
      </div>
    </div>
  );
}

export default Tag;
