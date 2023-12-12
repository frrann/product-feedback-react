import Comment from './Comment';

function CommentsRow({ comment }) {
  return (
    <div className="border-b-[2px] border-b-neutral-silver last:border-b-0">
      <Comment comment={comment} />
      {comment.replies.length !== 0 &&
        comment.replies.map((reply) => (
          <Comment
            comment={reply}
            isReply={true}
            replyToID={comment.id}
            key={reply.id}
          />
        ))}
    </div>
  );
}

export default CommentsRow;
