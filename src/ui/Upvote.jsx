import { useState } from 'react';

import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

function Upvote({ upvotes }) {
  const [votes, setVotes] = useState(upvotes);

  return (
    <div
      className="active:!upvote-active flex w-10 cursor-pointer content-center items-center justify-center gap-[10px] rounded-lg bg-neutral-pinky px-6 py-[6px] text-blue-dark transition-all duration-300 hover:bg-blue-periwinkle active:bg-blue md:h-14 md:flex-col"
      onClick={() => setVotes((votes) => votes + 1)}
    >
      <div className="text-blue">
        <MdOutlineKeyboardArrowUp />
      </div>
      <div className="custom-body-3 select-none text-center">{votes}</div>
    </div>
  );
}

export default Upvote;
