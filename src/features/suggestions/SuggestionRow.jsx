import { useNavigate } from 'react-router-dom';

import Tag from '../../ui/Tag';
import Upvote from '../../ui/Upvote';

import CommentsIcon from '../../assets/icon-comments.svg';

function SuggestionRow({ item }) {
  const navigate = useNavigate();

  return (
    <div
      className="flex w-full flex-col rounded-lg bg-neutral-white p-6 text-blue-midnight hover:cursor-pointer hover:text-blue md:flex-row md:items-stretch"
      onClick={() => navigate(`/suggestions/${item.id}`)}
    >
      <div className="flex flex-col gap-[10px] md:flex-1">
        <h4>{item.title}</h4>
        <p className="custom-body-3 font-normal !text-neutral-grey">
          {item.description}
        </p>
        <Tag>{item.category}</Tag>
      </div>
      <div className="flex items-center justify-between pt-4 md:order-first md:items-start md:pr-10 md:pt-0">
        <Upvote upvotes={item.upvotes} />
        <div className="flex cursor-pointer gap-2 md:hidden">
          <img src={CommentsIcon} alt="Comments" />
          <span className="custom-body-3">{item.comments.length}</span>
        </div>
      </div>
      <div className="hidden cursor-pointer select-none gap-2 md:flex md:self-center">
        <img src={CommentsIcon} alt="Comments" />
        <span className="custom-body-3">{item.comments.length}</span>
      </div>
    </div>
  );
}

export default SuggestionRow;
