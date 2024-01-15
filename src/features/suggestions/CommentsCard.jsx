import Card from '../../ui/Card';
import CommentThread from './CommentThread';

function CommentsCard({ suggestion }) {
  return (
    <Card>
      <h3 className="text-blue-midnight">
        {suggestion.totalComments} Comments
      </h3>
      {suggestion.comments.map((comment) => (
        <CommentThread comment={comment} key={comment.id} />
      ))}
    </Card>
  );
}

export default CommentsCard;
