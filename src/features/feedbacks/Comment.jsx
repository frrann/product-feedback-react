import { useState } from 'react';

import Button from '../../ui/Button';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';

import { useFeedback } from './useFeedback';
import { useUser } from '../authentication/useUser';
import { useComment } from './useComment';

function Comment({ comment }) {
  const [showReply, setShowReply] = useState(false);
  const [reply, setReply] = useState('');

  const { feedback, isLoading: isFeedbackLoading } = useFeedback();
  const { user, isLoading: isUserLoading } = useUser();
  const { addComment, isLoading: isCommentLoading } = useComment();

  const isReply = comment.replying_to_id !== null;

  function handleSubmit(e) {
    e.preventDefault();

    if (!reply.length) return;

    const newReply = {
      content: reply,
      feedback_request_id: feedback.id,
      user_id: user.id,
      replying_to_id: comment.id,
      replying_to_username: comment.user.username,
    };

    addComment(newReply);

    setReply('');
    setShowReply(false);
  }

  if (isFeedbackLoading || isUserLoading || isCommentLoading)
    return <Spinner />;

  return (
    <div
      className={` ${
        isReply
          ? 'mt-[-2px] border-t-[2px] border-t-neutral-white pb-6 pl-6 md:pb-8 md:pl-8'
          : 'border-b-[2px] border-b-neutral-silver py-6 last:border-b-0 md:py-8'
      }`}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={comment.user.image}
            alt="profile"
            className="mr-4 w-10 rounded-full md:mr-8"
          />
          <div>
            <h4 className="text-blue-midnight">{comment.user.name}</h4>
            <p className="custom-body-3 font-normal text-neutral-grey">
              @{comment.user.username}
            </p>
          </div>
        </div>
        <div>
          <button
            className="custom-body-3 text-blue"
            onClick={() => setShowReply((show) => !show)}
          >
            Reply
          </button>
        </div>
      </div>
      <div>
        <p className="custom-body-3 font-normal text-neutral-slate">
          <span className="font-bold text-purple">
            {isReply ? `@${comment.replying_to_username}` : ''}
          </span>{' '}
          {comment.content}
        </p>
      </div>
      {showReply && (
        <form
          className="flex items-start justify-between gap-4 pt-4"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="Type your comment here"
            id="reply"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          />
          <Button>Post Reply</Button>
        </form>
      )}
    </div>
  );
}

export default Comment;
