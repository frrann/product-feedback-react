import { useNavigate } from 'react-router-dom';

import Tag from '../../ui/Tag';
import Upvote from '../../ui/Upvote';

import { GoDotFill } from 'react-icons/go';
import CommentsIcon from '../../assets/icon-comments.svg';

const ROADMAP_TEXT = {
  planned: {
    heading: 'Planned',
    description: 'Ideas prioritized for research',
    color: '#F49F85',
  },
  progress: {
    heading: 'In-Progress',
    description: 'Currently being developed',
    color: '#AD1FEA',
  },
  live: {
    heading: 'Live',
    description: 'Released features',
    color: '#62BCFA',
  },
};

function SuggestionRow({
  item,
  shownOnRoadmap = false,
  status = 'suggestion',
}) {
  const navigate = useNavigate();

  const border = `border-t-[${ROADMAP_TEXT[status].color}]`;

  return (
    <div
      className={`flex w-full flex-col rounded-lg bg-neutral-white p-6 text-blue-midnight hover:cursor-pointer hover:text-blue md:flex-row md:items-stretch ${
        shownOnRoadmap && `mb-4 border-t-[6px] md:flex-col ${border}`
      }`}
      onClick={() => navigate(`/suggestions/${item.id}`)}
    >
      <div className="flex flex-col gap-[10px] md:flex-1">
        {shownOnRoadmap && (
          <div className="flex items-center gap-4">
            <GoDotFill color={ROADMAP_TEXT[status].color} />
            <span>{ROADMAP_TEXT[status].heading}</span>
          </div>
        )}
        <h4>{item.title}</h4>
        <p className="custom-body-3 font-normal !text-neutral-grey">
          {item.description}
        </p>
        <Tag>{item.category}</Tag>
      </div>
      <div
        className={`flex items-center justify-between pt-4 md:items-start md:pr-10 md:pt-0 ${
          !shownOnRoadmap && 'md:order-first'
        }`}
      >
        <Upvote upvotes={item.upvotes} />
        <div
          className={`flex cursor-pointer gap-2 ${
            !shownOnRoadmap && 'md:hidden'
          }`}
        >
          <img src={CommentsIcon} alt="Comments" />
          <span className="custom-body-3">{item.comments.length}</span>
        </div>
      </div>
      <div
        className={`hidden cursor-pointer select-none gap-2 ${
          !shownOnRoadmap && 'md:flex md:self-center'
        }`}
      >
        <img src={CommentsIcon} alt="Comments" />
        <span className="custom-body-3">{item.comments.length}</span>
      </div>
    </div>
  );
}

export default SuggestionRow;
