import Card from '../../ui/Card';
import CommentsRow from './CommentsRow';

function CommentsCard({ suggestion }) {
  return (
    <Card>
      <h3 className="text-blue-midnight">
        {suggestion.totalComments} Comments
      </h3>
      {suggestion.comments.map((comment) => (
        <CommentsRow comment={comment} key={comment.id} />
      ))}
    </Card>
  );
}

export default CommentsCard;
