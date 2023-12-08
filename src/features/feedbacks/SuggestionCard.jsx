import Card from '../../ui/Card';
import Tag from '../../ui/Tag';
import Upvote from '../../ui/Upvote';

import CommentsIcon from '../../assets/icon-comments.svg';

function SuggestionCard({ feedback }) {
  return (
    <Card className="md:flex-row md:items-stretch">
      <div className="flex flex-col gap-[10px] md:flex-1">
        <h4 className="text-blue-midnight">{feedback.title}</h4>
        <p className="custom-body-3 font-normal !text-neutral-grey">
          {feedback.description}
        </p>
        <Tag>{feedback.category}</Tag>
      </div>
      <div className="flex items-center justify-between pt-4 md:order-first md:items-start md:pr-10 md:pt-0">
        <Upvote upvotes={feedback.upvotes} />
        <div className="flex cursor-pointer gap-2 md:hidden">
          <img src={CommentsIcon} alt="Comments" />
          <span className="custom-body-3">{feedback.comments.length}</span>
        </div>
      </div>
      <div className="hidden cursor-pointer select-none gap-2 md:flex md:self-center">
        <img src={CommentsIcon} alt="Comments" />
        <span className="custom-body-3">{feedback.comments.length}</span>
      </div>
    </Card>
  );
}

export default SuggestionCard;
