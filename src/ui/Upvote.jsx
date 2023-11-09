import { useState } from 'react';

import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

function Upvote() {
  const [votes, setVotes] = useState(0);

  return (
    <div
      className="bg-neutral-pinky hover:bg-blue-periwinkle text-blue-dark active:bg-blue active:!upvote-active grid h-14 w-10 cursor-pointer content-center items-center justify-center rounded-lg transition-all duration-300"
      onClick={() => setVotes((votes) => votes + 1)}
    >
      <div className="text-blue">
        <MdOutlineKeyboardArrowUp />
      </div>
      <div className="text-center text-xs font-bold">{votes}</div>
    </div>
  );
}

export default Upvote;
