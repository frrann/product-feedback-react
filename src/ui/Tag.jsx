function Tag({ children }) {
  return (
    <div className="bg-neutral-pinky hover:bg-blue-periwinkle active:text-neutral-white text-blue active:bg-blue active:!upvote-active w-10 cursor-pointer rounded-lg p-[7px] transition-all duration-300">
      <div className="text-center text-xs font-bold">{children}</div>
    </div>
  );
}

export default Tag;
