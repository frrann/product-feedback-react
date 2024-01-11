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

  const border =
    status === 'planned'
      ? `border-planned`
      : status === 'progress'
      ? 'border-progress'
      : 'border-live';

  const commentsLength = !shownOnRoadmap
    ? item.comments.length
    : item.comment_count || 0;

  return (
    <div
      className={`flex w-full flex-col rounded-lg bg-neutral-white p-6 text-blue-midnight hover:cursor-pointer hover:text-blue md:flex-row md:items-stretch ${
        shownOnRoadmap && `mb-4 border-t-[6px] md:flex-col lg:mb-6 ${border}`
      }`}
    >
      <div
        className="flex flex-col gap-[10px] md:flex-1"
        onClick={() => navigate(`/suggestions/${item.id}`)}
      >
        {shownOnRoadmap && (
          <div className="flex items-center gap-4">
            <GoDotFill color={ROADMAP_TEXT[status].color} />
            <span className="custom-body-3 lg:custom-body-1 font-normal text-neutral-grey">
              {ROADMAP_TEXT[status].heading}
            </span>
          </div>
        )}
        <h4 className={`${shownOnRoadmap ? 'lg:text-lg' : 'md:text-lg'}`}>
          {item.title}
        </h4>
        <p
          className={`custom-body-3 font-normal !text-neutral-grey md:mb-3 ${
            !shownOnRoadmap && 'md:custom-body-1'
          }`}
        >
          {item.description}
        </p>
        <Tag>{item.category}</Tag>
      </div>
      <div
        className={`flex items-center justify-between pt-4  ${
          !shownOnRoadmap && 'md:order-first md:items-start md:pr-10 md:pt-0'
        }`}
      >
        <Upvote
          item={item}
          upvotes={item.upvotes}
          shownOnRoadmap={shownOnRoadmap}
        />
        <div
          className={`flex cursor-pointer gap-2 ${
            !shownOnRoadmap && 'md:hidden'
          } ${commentsLength === 0 && 'opacity-50'}`}
        >
          <img src={CommentsIcon} alt="Comments" />
          <span className="custom-body-3 font-bold">{commentsLength}</span>
        </div>
      </div>
      <div
        className={`hidden cursor-pointer select-none gap-2 ${
          !shownOnRoadmap && 'items-center md:flex md:self-center'
        } ${commentsLength === 0 && 'opacity-50'}`}
      >
        <img src={CommentsIcon} alt="Comments" />
        <span className="custom-body-1 font-bold">{commentsLength}</span>
      </div>
    </div>
  );
}

export default SuggestionRow;
