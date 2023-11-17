import Tag from '../../ui/Tag';
import Upvote from '../../ui/Upvote';

import CommentsIcon from '../../assets/icon-comments.svg';

function Suggestion({ item }) {
  return (
    <div className="flex w-full flex-col rounded-lg bg-neutral-white p-6 text-blue-midnight md:flex-row md:items-stretch">
      <div className="flex flex-col gap-[10px] md:flex-1">
        <h4>{item.title}</h4>
        <p className="custom-body-3 font-normal">{item.description}</p>
        <Tag>{item.category}</Tag>
      </div>
      <div className="flex items-center justify-between pt-4 md:order-first md:items-start md:pr-10 md:pt-0">
        <Upvote />
        <div className="flex cursor-pointer gap-2 md:hidden">
          <img src={CommentsIcon} alt="Comments" />
          <span className="custom-body-3">{item.comments.length}</span>
        </div>
      </div>
      <div className="hidden cursor-pointer gap-2 md:flex md:self-center">
        <img src={CommentsIcon} alt="Comments" />
        <span className="custom-body-3">{item.comments.length}</span>
      </div>
    </div>
  );
}

export default Suggestion;
