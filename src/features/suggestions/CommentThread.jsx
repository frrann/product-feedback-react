import Comment from './Comment';

function CommentThread({ comment }) {
  return (
    <div className="border-b-[2px] border-b-neutral-silver last:border-b-0">
      <Comment comment={comment} />
      {comment.replies.length !== 0 &&
        comment.replies.map((reply) => (
          <Comment comment={reply} key={reply.id} />
        ))}
    </div>
  );
}

export default CommentThread;
