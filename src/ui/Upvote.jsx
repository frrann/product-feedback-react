import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

import SpinnerMini from './SpinnerMini';

import { useUpdateUpvotes } from '../features/suggestions/useUpdateUpvotes';

function Upvote({ item, upvotes, shownOnRoadmap }) {
  const { updateUpvotes, isLoading } = useUpdateUpvotes();

  const specialLayout = !shownOnRoadmap && 'md:h-14 md:flex-col';

  function handleUpdate() {
    updateUpvotes({
      upvotes: upvotes + 1,
      id: item.id,
    });
  }

  if (isLoading) return <SpinnerMini />;

  return (
    <div
      className={`active:!upvote-active flex max-w-[70px] cursor-pointer content-center items-center gap-[10px] rounded-lg bg-neutral-pinky px-4 py-[6px] text-blue-dark transition-all duration-300 hover:bg-blue-periwinkle active:bg-blue ${specialLayout}`}
      onClick={handleUpdate}
    >
      <div className="text-blue">
        <MdOutlineKeyboardArrowUp />
      </div>
      <div className="custom-body-3 select-none text-center font-bold">
        {upvotes}
      </div>
    </div>
  );
}

export default Upvote;
