import Card from '../../ui/Card';
import Tag from '../../ui/Tag';
import Upvote from '../../ui/Upvote';

import CommentsIcon from '../../assets/icon-comments.svg';

function SuggestionCard({ suggestion }) {
  return (
    <Card className="md:flex-row md:items-stretch">
      <div className="flex flex-col gap-[10px] md:flex-1">
        <h4 className="text-blue-midnight">{suggestion.title}</h4>
        <p className="custom-body-3 font-normal !text-neutral-grey">
          {suggestion.description}
        </p>
        <Tag>{suggestion.category}</Tag>
      </div>
      <div className="flex items-center justify-between pt-4 md:order-first md:items-start md:pr-10 md:pt-0">
        <Upvote upvotes={suggestion.upvotes} />
        <div className="flex cursor-pointer gap-2 md:hidden">
          <img src={CommentsIcon} alt="Comments" />
          <span className="custom-body-3">{suggestion.comments.length}</span>
        </div>
      </div>
      <div className="hidden cursor-pointer select-none gap-2 md:flex md:self-center">
        <img src={CommentsIcon} alt="Comments" />
        <span className="custom-body-3">{suggestion.comments.length}</span>
      </div>
    </Card>
  );
}

export default SuggestionCard;
