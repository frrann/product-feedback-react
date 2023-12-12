import Card from '../../ui/Card';
import CommentsRow from './CommentsRow';

function CommentsCard({ feedback }) {
  return (
    <Card>
      <h3 className="text-blue-midnight">{feedback.totalComments} Comments</h3>
      {feedback.comments.map((comment) => (
        <CommentsRow comment={comment} key={comment.id} />
      ))}
    </Card>
  );
}

export default CommentsCard;
