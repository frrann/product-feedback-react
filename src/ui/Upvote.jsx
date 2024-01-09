import { useState } from 'react';

import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

function Upvote({ upvotes, shownOnRoadmap }) {
  const [votes, setVotes] = useState(upvotes);

  const specialLayout = !shownOnRoadmap && 'md:h-14 md:flex-col';

  return (
    <div
      className={`active:!upvote-active flex max-w-[70px] cursor-pointer content-center items-center gap-[10px] rounded-lg bg-neutral-pinky px-4 py-[6px] text-blue-dark transition-all duration-300 hover:bg-blue-periwinkle active:bg-blue ${specialLayout}`}
      onClick={() => setVotes((votes) => votes + 1)}
    >
      <div className="text-blue">
        <MdOutlineKeyboardArrowUp />
      </div>
      <div className="custom-body-3 select-none text-center font-bold">
        {votes}
      </div>
    </div>
  );
}

export default Upvote;
